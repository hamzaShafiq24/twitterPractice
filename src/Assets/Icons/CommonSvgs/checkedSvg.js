import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const CheckedSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : Colors.blackPrimary;
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` 
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="23px" height="23px"><path fill="#FFFFFF" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"/><path fill="#52b285" d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"/><path fill="none" stroke="#52b285" stroke-miterlimit="10" stroke-width="3" d="M11.2,20.1l5.8,5.8l13.2-13.2"/></svg>
      `}
    />
  );
};

export default CheckedSvg;