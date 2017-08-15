# site-settings-playbills

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# clone settings
git clone https://github.com/LibCrowds/site-settings-playbills /path/to/vue-pybossa-frontend/src/settings/playbills

# point to settings
echo "module.exports = require('@/custom/playbills/config.js')" >> /path/to/vue-pybossa-frontend/src/config.js

# rebuild
npm run build /path/to/vue-pybossa-frontend
```
