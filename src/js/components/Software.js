var React = require('react');

var Article = require('grommet/components/Article');
var Header = require('./Header');
var Section = require('grommet/components/Section');
var TBD = require('grommet/components/TBD');

var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var Footer = require('./Footer');

var Software = React.createClass({

  mixins: [IntlMixin],

  render: function() {
    return (
      <Article>

        <Header colorIndex="neutral-1" menuMedia="lap-and-up" />

        <Section appCentered={true}>
          <h1>{this.getGrommetIntlMessage('Software')}</h1>
          <p>
            Software Reference implementation for Open Switch!
          </p>
        </Section>

        <Section>
          <TBD />
        </Section>

        <Footer />
      </Article>
    );
  }
});

module.exports = Software;
