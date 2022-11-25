import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const ArrowDownSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : Colors.blackPrimary;
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.558058 0.558058C0.802136 0.313981 1.19786 0.313981 1.44194 0.558058L5.5 4.61612L9.55806 0.558058C9.80214 0.313981 10.1979 0.313981 10.4419 0.558058C10.686 0.802136 10.686 1.19786 10.4419 1.44194L6.29549 5.58839C5.85615 6.02773 5.14384 6.02773 4.7045 5.58839L0.558058 1.44194C0.313981 1.19786 0.313981 0.802136 0.558058 0.558058Z" fill="#BDC5CD"/>
      </svg>
      `}
    />
  );
};

export default ArrowDownSvg;