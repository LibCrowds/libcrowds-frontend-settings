const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  brand: 'Toping the Bill',
  tagline: 'Shine the lights on the performances recorded amongst the British Library’s collection of historic playbills.',
  description: 'Help rediscover the names of performances and performers set-up on the playbills of Britain’s old theatres.',
  company: 'The British Library',
  contact: {
    twitter: 'LibCrowds',
    email: 'crowdsourcing@bl.uk'
  },
  githubUrl: 'https://github.com/LibCrowds',
  pybossaHost: isDev ? 'http://127.0.0.1:5000' : 'https://46.101.77.30',
  dataLicense: {
    name: 'CC0',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/'
  },
  mapboxApiToken: 'pk.eyJ1IjoibGliY3Jvd2RzIiwiYSI6ImNpdmlxaHFzNTAwN3YydHBncHV3dHc3aXgifQ.V4WUx9SDcU_XLFJo2M3RxQ',
  mapboxId: 'mapbox.streets',
  forumUrl: 'http://community.libcrowds.com',
  bgImg: require('@/custom/site-settings-playbills/background.jpg'),
  aboutMd: require('@/custom/site-settings-playbills/about.md'),
  technologyMd: require('@/custom/site-settings-playbills/technology.md'),
  projectsMd: require('@/custom/site-settings-playbills/projects.md'),
  footer: {
    text: 'Part of the LibCrowds crowdsourcing platform',
    url: 'http://www.libcrowds.com'
  }
}
