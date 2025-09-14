declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
    NEXT_PUBLIC_JWT_ISSUER: string;

    NEXT_PUBLIC_HASURA_HTTP_ENDPOINT: string;
    NEXT_PUBLIC_HASURA_WS_ENDPOINT: string;

    NEXT_PUBLIC_APP_ADDRESS: string;
    NEXT_PUBLIC_TOKEN_ADDRESS: string;

    NEXT_PUBLIC_TESTNET: "true" | "false";
  }
}
