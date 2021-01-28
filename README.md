# Hardhat Node

Hardhat config for running a hardhat node.

## Usage

```bash
$ git clone https://github.com/ethereum-optimism/hardhat.git
$ cd hardhat
$ npm install
$ npx hardhat node
```

A very useful feature of Hardhat is forking from mainnet. This
can be done with the command:

```bash
$ npx hardhat node --hostname 0.0.0.0 --fork <web 3 url>
```

Note that an archive node is required for this. Alchemy provides
a free tier with archive nodes.

The `mine.sh` script calls `evm_mine` which will mine a block.
To automine on an interval:

```bash
INTERVAL=5
while true; do ./mine.sh; sleep $INTERVAL; done
```
