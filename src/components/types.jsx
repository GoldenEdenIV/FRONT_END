import PropTypes from 'prop-types';


// PropTypes definitions for components
const FeatureCardPropTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const FooterLinkGroupPropTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export { FeatureCardPropTypes, FooterLinkGroupPropTypes };
