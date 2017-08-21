const isDev = process.env.NODE_ENV === 'development'

const config = {
  company: 'The British Library',
  brand: 'LibCrowds',
  tagline: 'Crowdsourcing projects from the British Library',
  description: 'LibCrowds is a platform for hosting experimental crowdsourcing projects aimed at improving access to the diverse collections held at the British Library.',
  contact: {
    twitter: 'LibCrowds',
    email: 'crowdsourcing@bl.uk'
  },
  githubUrl: 'https://github.com/LibCrowds',
  pybossaHost: isDev ? 'http://127.0.0.1:5000' : 'http://playbills-backend.libcrowds.com',
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// List of collection configurations
config.collections = {
  playbills: require(`./playbills/config.js`),
  convertacard: require(`./convertacard/config.js`)
}

// Order of preference for project thumbnail types
config.thumbnailPreferences = [
  'iiif',
  'custom',
  'gravatar'
]

// Order of preference for user avatar types
config.avatarPreferences = [
  'custom',
  'gravatar'
]

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