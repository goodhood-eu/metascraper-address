const { $jsonld } = require('@metascraper/helpers');


const getSchema = (keyPath) => ({ htmlDom, url }) => $jsonld(keyPath)(htmlDom, url);

const plugin = () => ({
  locationName: [
    getSchema('name'),
  ],
  streetAddress: [
    getSchema('address.streetAddress'),
  ],
  addressCountry: [
    getSchema('address.addressCountry'),
  ],
  addressLocality: [
    getSchema('address.addressLocality'),
  ],
  postalCode: [
    getSchema('address.postalCode'),
  ],
});

module.exports = plugin;
