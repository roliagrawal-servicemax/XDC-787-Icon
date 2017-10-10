import React from 'react';
import PropTypes from 'prop-types';

const FontawesomeIcon = (props) => {
  const {
    name,
    className
  } = props;
  const iconClass = ['fa', name, className].join(' ');
  return (<i className={iconClass} aria-hidden="true" />);
};

FontawesomeIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default FontawesomeIcon;
