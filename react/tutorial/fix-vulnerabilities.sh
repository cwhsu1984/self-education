#!/bin/bash

# the script fix vulnerabilities by using npm,
# and then import fixed package from npm to yarn again

# generate `package-lock.json` without install anything
npm i --package-lock-only

# use npm to fix vulnerabilities
npm audit fix

# remove yarn lock
rm yarn.lock

# import `yarn.lock` from `package-lock.json`
yarn import

# remove npm package lock
rm package-lock.json
