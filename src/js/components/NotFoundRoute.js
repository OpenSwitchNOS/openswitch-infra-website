var React = require('react');


var Article = require('grommet/components/Article');
var Section = require('grommet/components/Section');
var Headline = require('grommet/components/Headline');
var IntlMixin = require('grommet/mixins/GrommetIntlMixin');

var OpenSwitchLogo = require('./icons/OpenSwitchLogo');

var Header = require('./Header');
var Footer = require('./Footer');

var NotFoundRouteSection = React.createClass({
  render: function () {
    return (
      <Section {...this.props}
        appCentered={true} justify="center" align="center"
        textCentered={true} pad={{vertical: "large"}}>
        {this.props.children}
      </Section>
    );
  }
});

var NotFoundRoute = React.createClass({

  mixins: [IntlMixin],

  _onClick: function () {
    //no-op
  },

  render: function() {
    return (
      <Article>
        <Header className="home" float={true} media="lap-and-up" />
        <NotFoundRouteSection primary={true} full={true} className="openswitch-hero"
          backgroundImage={'url(img/openswitch-background.png)'}>
          <OpenSwitchLogo a11yTitle=""/>
          <Headline small={true}><b>It looks like nothing was found</b></Headline>
          <Headline small={true}><b>at this location.</b></Headline>
        </NotFoundRouteSection>
        <Footer float={true} />
      </Article>
    );
  }
});

module.exports = NotFoundRoute;
