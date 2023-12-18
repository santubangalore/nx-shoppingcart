import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth-remote',
  exposes: {
    './Routes': 'auth-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
