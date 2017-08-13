# site-settings-playbills

[![Build Status](https://travis-ci.org/LibCrowds/site-settings-playbills.svg?branch=master)](https://travis-ci.org/LibCrowds/site-settings-playbills)

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# clone settings
git clone https://github.com/LibCrowds/site-settings-playbills /path/to/vue-pybossa-frontend/src/custom/settings

# point to settings
echo "module.exports = require('@/custom/settings/config.js')" >> /path/to/vue-pybossa-frontend/src/config.js

# rebuild
npm run build /path/to/vue-pybossa-frontend
```
