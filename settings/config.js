const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  brand: 'In the Spotlight',
  tagline: 'Bring past performances from the British Library’s historic playbills collection to life.',
  description: 'Help rediscover popular entertainment from the past 300 years by transcribing names and performances on the playbills of Britain’s old theatres.',
  company: 'The British Library',
  contact: {
    twitter: 'LibCrowds',
    email: 'crowdsourcing@bl.uk'
  },
  githubUrl: 'https://github.com/LibCrowds',
  analytics: 'UA-59584422-4',
  pybossaHost: isDev ? 'http://127.0.0.1:5000' : 'https://playbills-backend.libcrowds.com',
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  sentryPublicDsn: 'https://6b592ec745ca4c7bb8d865e1c002e624@sentry.io/195392',
  mapboxPublicApiToken: 'pk.eyJ1IjoibGliY3Jvd2RzIiwiYSI6ImNpdmlxaHFzNTAwN3YydHBncHV3dHc3aXgifQ.V4WUx9SDcU_XLFJo2M3RxQ',
  mapboxId: 'mapbox.streets',
  forumUrl: 'http://community.libcrowds.com',
  bgImg: require('@/custom/site-settings-playbills/settings/background.jpg'),
  aboutMd: require('@/custom/site-settings-playbills/settings/about.md'),
  technologyMd: require('@/custom/site-settings-playbills/settings/technology.md'),
  projectsMd: require('@/custom/site-settings-playbills/settings/projects.md'),
  footer: {
    text: 'Part of the LibCrowds crowdsourcing platform',
    url: 'http://www.libcrowds.com'
  },
  requiresAdmin: {
    projectManagement: true
  },
  ignoreCustomThumbnail: true
}
