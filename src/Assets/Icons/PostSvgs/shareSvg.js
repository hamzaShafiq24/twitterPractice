import React from 'react';
import {SvgXml} from 'react-native-svg';

const ShareSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` 
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.27145 0.146447C7.46671 -0.0488154 7.78329 -0.0488157 7.97855 0.146446L11.5669 3.73484C11.811 3.97891 11.811 4.37464 11.5669 4.61872C11.3229 4.8628 10.9271 4.8628 10.6831 4.61872L8.25 2.18566V9.67678C8.25 10.022 7.97018 10.3018 7.625 10.3018C7.27982 10.3018 7 10.022 7 9.67678V2.18566L4.56694 4.61872C4.32286 4.8628 3.92714 4.8628 3.68306 4.61872C3.43898 4.37464 3.43898 3.97891 3.68306 3.73484L7.27145 0.146447ZM0.625 8.05178C0.970178 8.05178 1.25 8.3316 1.25 8.67678V12.6768C1.25 13.16 1.64175 13.5518 2.125 13.5518H13.125C13.6082 13.5518 14 13.16 14 12.6768V8.67678C14 8.3316 14.2798 8.05178 14.625 8.05178C14.9702 8.05178 15.25 8.3316 15.25 8.67678V12.6768C15.25 13.8504 14.2986 14.8018 13.125 14.8018H2.125C0.951395 14.8018 0 13.8504 0 12.6768V8.67678C0 8.3316 0.279822 8.05178 0.625 8.05178Z" fill="#687684"/>
</svg>

      `}
    />
  );
};

export default ShareSvg;