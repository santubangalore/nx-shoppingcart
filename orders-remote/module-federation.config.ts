import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'orders-remote',
  exposes: {
    './Routes': 'orders-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
