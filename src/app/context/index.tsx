"use client";

import React, { ReactNode } from "react";
import { ApolloWrapper } from "./ApolloWrapper";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider, createConfig, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  rainbowWallet,
  phantomWallet,
  metaMaskWallet,
  braveWallet,
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, rainbowWallet, phantomWallet, braveWallet],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
  },
);

const config = createConfig({
  chains: [process.env.NEXT_PUBLIC_TESTNET === "true" ? baseSepolia : base],
  transports: {
    [baseSepolia.id]: http(baseSepolia.rpcUrls.default.http[0]),
    [base.id]: http(base.rpcUrls.default.http[0]),
  },
  ssr: false,
  connectors,
});

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // default: true
    },
  },
});

const theme = lightTheme();

function contextProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <ApolloWrapper>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider
            modalSize="compact"
            theme={{
              lightMode: lightTheme(),
              darkMode: darkTheme(),
            }}
          >
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ApolloWrapper>
  );
}

export default contextProvider;
