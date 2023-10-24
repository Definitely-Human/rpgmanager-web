/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.{tsx,ts}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
};

export default config;
