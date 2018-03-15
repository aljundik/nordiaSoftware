import React from 'react';
import PropTypes from 'prop-types';

const InlineValidate = ({ error, }) => <span style={{ color: 'red', }}> {error} <br /></span>;


InlineValidate.propTypes = {
  error: PropTypes.string,
};

InlineValidate.defaultProps = {
  error: '',
};

export default InlineValidate;
