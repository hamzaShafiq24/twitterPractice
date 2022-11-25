import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const BackArrowOneSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : Colors.blackPrimary;
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13L1 7L7 1" stroke="${defaultColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
    />
  );
};

export default BackArrowOneSvg;