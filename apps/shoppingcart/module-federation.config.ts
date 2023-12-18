import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shoppingcart',
  remotes: [
    'checkout-remote',
    'search-product-remote',
    'auth-remote',
    'orders-remote',
    'cart-remote',
  ],
};

export default config;
