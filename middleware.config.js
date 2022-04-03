module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: process.env.SHOPIFY_STORE_DOMAIN,
          storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
