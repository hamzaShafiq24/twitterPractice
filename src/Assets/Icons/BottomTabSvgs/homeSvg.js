import { useTheme } from '@react-navigation/native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import { Colors } from '../../../Theme';

const HomeSvg = ({height, width, color, size,isFocused}) => {
  const { colors } = useTheme();
  const defaultHeight = height ? height : 10;
  const defaultWidth = width ? width : 10;
  const defaultColor =  isFocused ? Colors.skyBluePrimary  :  colors.bottomTabIcon 
  const defaultSize = size ? size : 12;

  return (
    <SvgXml
      xml={` 
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.9542 7.03274L1.87199 7.65115C1.51235 7.85665 1.05421 7.73171 0.848702 7.37207C0.643194 7.01243 0.768142 6.55429 1.12778 6.34878L10.6355 0.915798C11.4809 0.43269 12.5188 0.43269 13.3643 0.915798L22.872 6.34878C23.2316 6.55429 23.3566 7.01243 23.1511 7.37207C22.9456 7.73171 22.4874 7.85665 22.1278 7.65115L21.0456 7.03274L19.6001 17.5124C19.3442 19.3679 17.7583 20.75 15.8853 20.75H8.11449C6.24142 20.75 4.6556 19.3679 4.39966 17.5124L2.9542 7.03274ZM12 13.9999C13.7949 13.9999 15.25 12.5449 15.25 10.7499C15.25 8.95501 13.7949 7.49994 12 7.49994C10.2051 7.49994 8.75 8.95501 8.75 10.7499C8.75 12.5449 10.2051 13.9999 12 13.9999Z" fill="${defaultColor}"/>
</svg>

      `}
    />
  );
};

export default HomeSvg;