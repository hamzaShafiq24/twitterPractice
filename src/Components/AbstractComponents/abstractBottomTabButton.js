import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../../Theme';

const AbstractBottomTabButton = ({
  svg,
  width,
  label,
  myStyle,
  isFocused,
  onPress,
}) => {
  const defLabel = label ? label : 'text';
  const defWidth = width ? width : '25%';
  const myFocusColor = isFocused
    ? Colors.blueprimary
    : Colors.greySecondaryFour;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.mainContainer, {width: defWidth}, {...myStyle}]}
    >
      {svg ? svg() : null}
    </TouchableOpacity>
  );
};

export default AbstractBottomTabButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
