// Basic configuration
const config = {
  key: 'playbills',
  name: 'In the Spotlight',
  tagline: 'Bring past performances from the British Library’s historic playbills collection to life.',
  description: 'Help rediscover popular entertainment from the past 300 years by transcribing names and performances on the playbills of Britain’s old theatres.'
}

// Link to the site forum
config.forumUrl = 'https://community.libcrowds.com/t/in-the-spotlight'

// Main background image for the site
config.bgImg = require(`./background.jpg`)

// Sections of markdown text for the about page
config.about = {
  intro: require(`./about/intro.md`),
  subsections: [
    {
      id: 'playbills',
      title: 'About In the Spotlight',
      markdown: require(`./about/playbills.md`)
    },
    {
      id: 'contributions',
      title: 'How your contributions make a difference',
      markdown: require(`./about/contributions.md`)
    },
    {
      id: 'technology',
      title: 'Technology',
      markdown: require(`./about/technology.md`)
    },
    {
      id: 'contact',
      title: 'Contact',
      markdown: require(`./about/contact.md`)
    }
  ]
}

// Set the presenter type
config.presenter = 'libcrowds-viewer'

// Set the project terminology
config.terminology = {
  category: 'volume',
  project: 'project',
  task: 'task',
  taskRun: 'contribution'
}

module.exports = config
