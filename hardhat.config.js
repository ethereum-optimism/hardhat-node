require('@nomiclabs/hardhat-waffle');
require('@eth-optimism/hardhat-state-dumps/build/src/plugin');
require("@nomiclabs/hardhat-etherscan");

const hdnode = require('@ethersproject/hdnode');

let mnemonic = process.env.MNEMONIC;
if (typeof mnemonic === 'undefined')
  mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
        path: hdnode.defaultPath,
        count: 5,
        gasPrice: 0,
        gasLimit: 0x1fffffffffffff,
      }
    }
  },
  analytics: { enabled: false },
  dump: process.env.INITIAL_STATE_PATH
};

