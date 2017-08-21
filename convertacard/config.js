// Basic configuration
const config = {
  key: 'convertacard',
  name: 'Convert-a-Card',
  tagline: 'Transform printed card catalogues into a searchable online database.',
  description: 'Help enhance the discoverablity of our collections by matching converting digitised catalogue cards into electonric records.'
}

// Link to the site forum
config.forumUrl = 'https://community.libcrowds.com/t/convert-a-card'

// Main background image for the site
config.bgImg = require(`./background.jpg`)

// Sections of markdown text for the about page
config.about = {
  intro: require(`./about/intro.md`),
  subsections: [
    {
      id: 'pinyin',
      title: 'The Pinyin Card Catalogue',
      markdown: require(`./about/pinyin.md`)
    },
    {
      id: 'indonesian',
      title: 'The Indonesian Card Catalogue',
      markdown: require(`./about/indonesian.md`)
    },
    {
      id: 'urdu',
      title: 'The Urdu Card Catalogue',
      markdown: require(`./about/urdu.md`)
    },
    {
      id: 'contact',
      title: 'Contact',
      markdown: require(`./about/contact.md`)
    }
  ]
}

module.exports = config
