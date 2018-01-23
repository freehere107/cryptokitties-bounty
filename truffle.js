module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // https://www.rinkeby.io/
    // https://blog.abuiles.com/blog/2017/07/09/deploying-truffle-contracts-to-rinkeby/
    rinkeby: {
      host: "localhost",
      port: 8545,
      from: "0x00a1537d251a6a4c4effab76948899061fea47b9", // enter your local rinkeby unlocked address
      network_id: 4,
      gas: 4500000, // Gas limit used for deploys
      gasPrice: 10000000000 // 10 gwei
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  // https://truffle.readthedocs.io/en/beta/advanced/configuration/
  mocha: {
    bail: true
  }
};
