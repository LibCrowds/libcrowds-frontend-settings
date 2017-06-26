# site-settings-inthespotlight

[![Build Status](https://travis-ci.org/LibCrowds/site-settings-inthespotlight.svg?branch=master)](https://travis-ci.org/LibCrowds/site-settings-inthespotlight)

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# move to the vue-pybossa-frontend custom directory
cd /path/to/vue-pybossa-frontend/src/custom

# clone settings
git clone https://github.com/LibCrowds/site-settings-inthespotlight

# point to settings
cd /path/to/vue-pybossa-frontend/src
rm config.js
echo "module.exports = require('@/custom/site-settings-inthespotlight/config.js')" >> config.js

# rebuild
npm run build
```
