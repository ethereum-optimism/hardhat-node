require("@nomiclabs/hardhat-etherscan");
const hdnode = require('@ethersproject/hdnode');

let mnemonic = process.env.MNEMONIC;
if (typeof mnemonic === 'undefined')
  mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

const loggingEnabled = process.env.LOGGING_ENABLED === 'true';

module.exports = {
  solidity: '0.7.3',
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
        path: hdnode.defaultPath,
        count: 8,
        gasPrice: 0,
        gasLimit: 0x1fffffffffffff,
      },
      loggingEnabled,
    },
  },
  analytics: { enabled: false },
};

