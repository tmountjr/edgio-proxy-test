module.exports = {
  backends: {
    proxied: {
      domainOrIp: "proxied.local",
      hostHeader: "proxied.local",
      port: 8443,
      disableCheckCert: true,
    },
  },

  // The name of the site in Edgio to which this app should be deployed.
  name: "proxy-test",
};
