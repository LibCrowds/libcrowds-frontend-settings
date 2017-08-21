# libcrowds-frontend-settings

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# clear old settings
rm siteConfig.js
rm -rf src/custom/*/

# clone new settings
cd /path/to/vue-pybossa-frontend/src/custom
git clone https://github.com/LibCrowds/libcrowds-frontend-settings settings

# point to new settings
echo "module.exports = require('@/custom/settings/siteConfig.js')" >> siteConfig.js

# rebuild
npm run build
```
