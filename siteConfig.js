const isDev = process.env.NODE_ENV === 'development'

const config = {
  company: 'The British Library',
  brand: 'LibCrowds',
  tagline: 'Crowdsourcing projects from the British Library',
  description: 'LibCrowds is a platform for hosting experimental crowdsourcing projects aimed at improving access to the diverse collections held at the British Library.',
  contact: {
    twitter: 'LibCrowds',
    email: 'digitalresearch@bl.uk'
  },
  githubUrl: 'https://github.com/LibCrowds',
  pybossa: {
    host: isDev ? 'http://127.0.0.1:5000' : 'https://backend.libcrowds.com',
    timeout: 5000
  },
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// Company logo
config.logo = require('./company-logo.svg')

// List of collection configurations
config.collections = {
  playbills: require(`./playbills/config.js`),
  convertacard: require(`./convertacard/config.js`)
}

// Mapbox configuration for location stats
config.mapbox = {
  id: 'mapbox.streets',
  publicApiToken: 'pk.eyJ1IjoibGliY3Jvd2RzIiwiYSI6ImNpdmlxaHFzNTAwN3YydHBncHV3dHc3aXgifQ.V4WUx9SDcU_XLFJo2M3RxQ'
}

// Sentry public DSN
config.sentryPublicDsn = 'https://6b592ec745ca4c7bb8d865e1c002e624@sentry.io/195392'

// Google analytics tracking ID
config.analytics = 'UA-59584422-4'

module.exports = config
