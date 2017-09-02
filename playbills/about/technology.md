
*In the Spotlight* is part of the [LibCrowds](https://libcrowds.com/) crowdsourcing platform, 
which aims to make the collections of the British Library easier to 
find by asking the public to help enhance information about 
collection items.

On the backend, *In the Spotlight* uses an instance of 
[PyBossa](http://pybossa.com/), an open-source framework for the creation 
of crowdsourcing projects. On the frontend, a custom theme has been 
developed using [Vue.js](https://vuejs.org/), a JavaScript 
framework for building user interfaces. Images are loaded via [IIIF](http://iiif.io/) manifests
generated from an internal repository for use by the Library's [Universal Viewer](http://blogs.bl.uk/digital-scholarship/2016/12/new-viewer-digitised-collections-british-library.html). A Vue.js component called 
(LibCrowds Viewer)[https://github.com/LibCrowds/libcrowds-viewer] was written to present the microtasks. 
As this component is entirely decoupled from *In the Spotlight* it could be used for additional crowdsourcing projects.

Contributions are serialised according to the [Web Annotations Data Model](https://www.w3.org/TR/annotation-model/).
Following an analysis and quality control process the data will be searchable via the [IIIF Content Search API](http://iiif.io/api/search/1.0/), as well as being transformed into MARC-formatted metadata fields and ingested into the 
British Library's [Explore](http://explore.bl.uk/) catalogue.

The theme, all project templates and further plugins are Open Source and available via the
[LibCrowds GitHub page](https://github.com/LibCrowds).
