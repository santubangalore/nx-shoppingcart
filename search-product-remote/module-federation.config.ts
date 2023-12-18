import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'search-product-remote',
  exposes: {
    './Routes': 'search-product-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
