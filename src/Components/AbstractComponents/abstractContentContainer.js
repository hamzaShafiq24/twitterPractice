import React from 'react';
import {StyleSheet, View} from 'react-native';

const AbstractContentContainer = ({children, bgColor,width}) => {
  const defBgColor = bgColor ? bgColor : undefined;
  const defaultWidth = width ? width : "90%";

  return (
    <View style={[styles.mainContainer, {backgroundColor: defBgColor,width:defaultWidth}]}>
      {children}
    </View>
  );
};

export default AbstractContentContainer;

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
 
  },
});