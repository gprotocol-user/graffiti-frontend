import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/lib/generated/schema.graphql",

  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure

  documents: ["src/**/*.{ts,tsx}"],

  generates: {
    "./src/lib/generated/codegen/": {
      preset: "client",

      plugins: [],

      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },

  ignoreNoDocuments: true,
};

export default config;
