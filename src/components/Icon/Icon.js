import React from 'react';
import ImgIcon from './ImgIcon';
import FontawesomeIcon from './FontawesomeIcon';
import PropTypes from 'prop-types';

/**
  * Icon class is for rendrening icon it can render both image type or font-awesome icons.
  * for fontawesome need to pass type property as font-awesome
  * for image need to pass type property as img
  * properties it can take are
  * type: string mendatory  value either font-awesome(for font-awesome icon) or img(for image icon).
  * src: string mandatrory in case type is img
  * alt: string mandatrory in case type is img
  * name: string mandatrory in case type is font-awesome
  * width: string notmendatory default 32 used only in case of image icon
  * height: string notmendatory default 32 used only in case of image icon
  * className: string notmendatory used only in case of image icon

*/

const Icon = (props) => {
  const {
    width,
    height,
    src,
    alt,
    type,
    name,
    className,
  } = props;
  if (type === 'img') {
    return (<ImgIcon src={src} height={height} width={width} alt={alt} className={className} />);
  } else if (type === 'font-awesome') {
    return (<FontawesomeIcon name={name} classname={className} />);
  }

  return (<span />);
};

Icon.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(['img', 'font-awesome']).isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultPropsTypes = {
  width: 32,
  height: 32,
  className: '',
};

export default Icon;
