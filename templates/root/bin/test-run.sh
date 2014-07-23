#!/bin/bash

source ~/.nvm/nvm.sh
nvm use

# Starting API server
NODE_ENV=test node --harmony index.js --server:port 3777 &
PID=$!

echo "Running server with PID $PID"

sleep 3

nvm use 0.10

# Start dredd
dredd --level verbose apiary.apib http://localhost:3777/
RESULT=$?
kill -9 $PID
exit $RESULT
