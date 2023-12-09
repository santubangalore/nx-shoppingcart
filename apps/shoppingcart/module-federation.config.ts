import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shoppingcart',
  remotes: ['checkout-remote'],
};

export default config;
