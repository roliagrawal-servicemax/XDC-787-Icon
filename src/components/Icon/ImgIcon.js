import React from 'react';
import PropTypes from 'prop-types';

const ImgIcon = (props) => {
  const {
    width,
    height,
    src,
    alt,
    className,
  } = props;
  return (<img src={src} height={height} width={width} alt={alt} className={className} />);
};

ImgIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default ImgIcon;
