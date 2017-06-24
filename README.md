# site-settings-playbills

Configuration settings for use with
[vue-pybossa-frontend](https://github.com/LibCrowds/vue-pybossa-frontend).

``` bash
# move to the custom directory
cd /path/to/vue-pybossa-frontend/src/custom

# clone
git clone https://github.com/LibCrowds/site-settings-playbills

# configure
cd /path/to/vue-pybossa-frontend/src
rm config.js
echo "module.exports = require('@/custom/site-settings-playbills/config.js')" >> config.js

# rebuild
cd ..
npm run build
```
