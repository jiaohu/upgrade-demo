require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

const LOCAL_SK1 = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const LOCAL_SK2 = "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    viaIR: true,
    optimizer: {
      enabled: true,
      runs: 100
    }
  },
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 5000
      },
      timeout: 30000
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: [LOCAL_SK1, LOCAL_SK2]
    },
  }
};
