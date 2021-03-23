require("@nomiclabs/hardhat-etherscan");
const hdnode = require('@ethersproject/hdnode');

let mnemonic = process.env.MNEMONIC;
if (typeof mnemonic === 'undefined')
  mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

let hdpath = process.env.HD_PATH;
if (typeof hdpath === 'undefined')
  hdpath = hdnode.defaultPath

module.exports = {
  solidity: '0.7.3',
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
        path: hdpath,
        count: 8,
        gasPrice: 0,
        gasLimit: 0x1fffffffffffff,
      },
    },
  },
  analytics: { enabled: false },
};

