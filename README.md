# site-settings-playbills

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# move to the vue-pybossa-frontend custom directory
cd /path/to/vue-pybossa-frontend/src/custom

# clone settings
git clone https://github.com/LibCrowds/site-settings-playbills

# point to settings
cd /path/to/vue-pybossa-frontend/src
rm config.js
echo "module.exports = require('@/custom/site-settings-playbills/config.js')" >> config.js

# rebuild
npm run build
```
