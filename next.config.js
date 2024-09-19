module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['thedapplist.com', 'images.thedapplist.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/proposals',
                destination: 'https://apis.thedapplist.com/v1/proposals',
            },
            {
                source: '/api/categories',
                destination: 'https://thedapplist.com/api/v2/categories',
            },
            {
                source: '/api/chains',
                destination: 'https://thedapplist.com/api/v2/blockchain?limit=all',
            }
        ]
    },
  }