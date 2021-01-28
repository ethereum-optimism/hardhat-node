#!/bin/bash

URL="${1:-127.0.0.1:8545}"

curl --silent -k \
    -H 'Content-Type: application/json' \
    --data '{"jsonrpc":"2.0","method":"evm_mine","params":[],"id":0}' \
    $URL
