addSubDomain({
  description: 'Root domain',
  domain: '1bt.uk',
  subdomain: '@',
  owner: {
    repo: 'https://github.com/tarampampam/free-domains',
  },
  record: {
    TXT: [
      'v=spf1 -all',
    ],
    A: [
      '192.0.2.1',
    ],
    AAAA: [
      '100::',
    ],
  },
})
