addSubDomain({
  description: 'Personal site for personal projects',
  domain: 'is-an.app',
  subdomain: 'azumi',
  owner: {
    repo: 'https://github.com/Azumi-Development/Azumi-Development.github.io/',
    email: 'AquaQuokka@outlook.com',
  },
  record: {
    CNAME: 'azumi-development.github.io',
  },
  nested: [
    {
      subdomain: 'docs',
      record: {
        CNAME: 'azumidocs.github.io',
      },
      proxy: false,
    },
    {
      subdomain: 'blog',
      record: {
        CNAME: 'hashnode.network',
      },
      proxy: false,
    },
  ],
})
