addSubDomain({
  description: 'Epic scratch modifation with tons of cool features',
  domain: 'is-an.app',
  subdomain: 'shredmod',
  owner: {
    repo: 'https://github.com/ShredMod/shredmod.github.io',
    email: 'themadpunter10@gmail.com',
  },
  record: {
    CNAME: 'shredmod.github.io',
  },
  nested: [
    {
      subdomain: 'packager',
      record: {
        CNAME: 'shredmod.github.io',
      },
    },
    {
      subdomain: 'extensions',
      record: {
        CNAME: 'shredmod.github.io',
      },
    },
    {
      subdomain: 'documentations',
      record: {
        CNAME: 'shredmod.github.io',
      },
    },
  ],
})
