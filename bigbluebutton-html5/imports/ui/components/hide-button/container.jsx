import React from 'react';
import HideButtonComponent from './component';
import FullscreenService from './service';

const HideButtonContainer = props => <HideButtonComponent {...props} />;

export default (props) => {
  const isIphone = (navigator.userAgent.match(/iPhone/i)) ? true : false;
  return (
    <HideButtonContainer {...props} {...{ isIphone }} />
  );
};
