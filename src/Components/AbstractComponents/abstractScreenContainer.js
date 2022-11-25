import { useTheme } from '@react-navigation/native';
import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StyleProp,
  ViewProps,
  ViewStyle,
  Dimensions,
} from 'react-native';
const {height} = Dimensions.get('window');
const defaultProps = {
  upperStyle: {backgroundColor: 'white'},
  bottomStyle: {backgroundColor: 'white'},
};

const ScreenContainer = ({upperStyle, bottomStyle, children}) => {

  const { colors } = useTheme();

  return (
    <>
      <SafeAreaView style={[{flex: 0}, upperStyle,{backgroundColor:colors.background}]} />
      <SafeAreaView style={[{flex: 1, backgroundColor: colors.background}]}>
        {children}
      </SafeAreaView>
      <SafeAreaView style={[{flex: 0}, bottomStyle,{backgroundColor:colors.background}]} />
    </>
  );
};
ScreenContainer.defaultProps = defaultProps;
export default ScreenContainer;