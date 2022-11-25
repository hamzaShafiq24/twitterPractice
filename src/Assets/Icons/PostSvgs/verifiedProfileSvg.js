import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const VerifiedProfileSvg = ({height, width, color, size}) => {
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor = color ? color : 'white';
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` 
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.2019 4.59839C1.07288 3.69543 1.35559 2.74487 2.05029 2.05017C2.74487 1.35559 3.69543 1.07288 4.59839 1.2019C5.14563 0.472168 6.0177 0 7 0C7.9823 0 8.85437 0.472168 9.40161 1.2019C10.3046 1.07288 11.2551 1.35559 11.9497 2.05017C12.6444 2.74487 12.9271 3.69543 12.7981 4.59839C13.5278 5.14563 14 6.0177 14 7C14 7.9823 13.5278 8.85437 12.7981 9.40161C12.9271 10.3046 12.6444 11.255 11.9497 11.9497C11.2551 12.6444 10.3046 12.9271 9.40161 12.7981C8.85437 13.5278 7.9823 14 7 14C6.0177 14 5.14563 13.5278 4.59839 12.7981C3.69543 12.9271 2.74487 12.6444 2.05029 11.9497C1.35559 11.255 1.07288 10.3046 1.2019 9.40161C0.472168 8.85437 0 7.9823 0 7C0 6.0177 0.472168 5.14563 1.2019 4.59839Z" fill="${Colors.skyBluePrimary}"/>
<path d="M4.53369 7.49194L5.99432 8.91869C6.10367 9.0255 6.28243 9.01004 6.37181 8.88604L9.35326 4.75" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>

      `}
    />
  );
};

export default VerifiedProfileSvg;