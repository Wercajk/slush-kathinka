#!/bin/bash

source ~/.nvm/nvm.sh
nvm use

# Starting API server
NODE_ENV=test node --harmony index.js &
PID=$!

echo "Running server with PID $PID"

sleep 3

nvm use 0.10

# Start dredd
dredd --level verbose apiary.apib http://localhost:54321/
RESULT=$?
kill -9 $PID
exit $RESULT
