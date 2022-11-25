import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const BackArrowTwoSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : Colors.blackPrimary;
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66663 7.00001H16.3333" stroke="${defaultColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.37033 1L1.66663 7L7.37033 13" stroke="${defaultColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      `}
    />
  );
};

export default BackArrowTwoSvg;