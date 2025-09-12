"use client";

import React, { ReactNode } from "react";
import { ApolloWrapper } from "./ApolloWrapper";
// import { GlobalStateProvider } from "./GlobalState";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider, createConfig, http } from "wagmi";
import { base, baseSepolia, localhost } from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";

import {
  rainbowWallet,
  walletConnectWallet,
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

// const config = getDefaultConfig({
//   appName: "RainbowKit App",
//   projectId: "YOUR_PROJECT_ID",
//   chains: [
//     baseSepolia,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
//       ? [baseSepolia]
//       : []),
//   ],
//   ssr: true,
// });

const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(baseSepolia.rpcUrls.default.http[0]),
  },
  ssr: true,
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
// theme.fonts.body = "Times New Roman";

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
