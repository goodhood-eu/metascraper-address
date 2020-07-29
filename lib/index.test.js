const fs = require('fs');
const { expect } = require('chai');

const metascraper = require('metascraper')([
  require('./index')(),
]);

const html = fs.readFileSync(`${__dirname}/../fixtures/sample.html`, 'utf-8');
const url = 'https://example.com';

describe('metascraper-address', () => {
  it('locationName', async() => {
    const meta = await metascraper({ html, url });
    expect(meta.locationName).be.equal('Deutscher Bundestag - Reichstagsgeb\u00e4ude');
  });

  it('streetAddress', async() => {
    const meta = await metascraper({ html, url });
    expect(meta.streetAddress).be.equal('Platz der Republik 1');
  });

  it('addressCountry', async() => {
    const meta = await metascraper({ html, url });
    expect(meta.addressCountry).be.equal('DE');
  });

  it('addressLocality', async() => {
    const meta = await metascraper({ html, url });
    expect(meta.addressLocality).be.equal('Berlin');
  });

  it('postalCode', async() => {
    const meta = await metascraper({ html, url });
    expect(meta.postalCode).be.equal('11011');
  });
});
