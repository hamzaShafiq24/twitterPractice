import { useTheme } from '@react-navigation/native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const SearchSvg = ({height, width, color, size,isFocused}) => {
  const { colors } = useTheme();
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor =  isFocused ? Colors.skyBluePrimary  :  colors.bottomTabIcon 
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8116 16.3723C13.2436 17.6996 11.2153 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5C18 11.7153 17.1996 13.7436 15.8723 15.3116L19.5303 18.9697C19.8232 19.2626 19.8232 19.7374 19.5303 20.0303C19.2374 20.3232 18.7626 20.3232 18.4697 20.0303L14.8116 16.3723ZM16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 5.35786 4.85786 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5Z" fill="${defaultColor}"/>
      </svg>
      
      `}
    />
  );
};

export default SearchSvg;