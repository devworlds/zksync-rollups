require("@matterlabs/hardhat-zksync");

module.exports = {
  zksolc: {
    version: "1.5.7", // zkSync compile version
    compilerSource: "binary", // binary compile
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    zkSyncTestnet: {
      url: "https://zksync-sepolia.core.chainstack.com/b6458b035b7ac06f4cdb4b17c563fa05", // zkSync Testnet URL
      ethNetwork: "sepolia", // Network Ethereum
      zksync: true, // Enable zkSync
      accounts: [process.env.PRIVATE_KEY], // Deployer PrivateKey 
      verifyURL: 'https://explorer.sepolia.era.zksync.dev/contract_verification'
    },
  },
  solidity: {
    version: "0.8.19", // Solidity Version
  },
};