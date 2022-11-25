import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'

const defaultProps = {
  upperStyle: { backgroundColor: 'green' },
  bottomStyle: { backgroundColor: 'white' },
};

const ScreenContainer = ({ upperStyle, bottomStyle, children }) => {
  const backgroundColor = upperStyle.backgroundColor? upperStyle.backgroundColor: "white"
  return (
    <>
      {/* <SafeAreaView style={[{ flex: 0 }, upperStyle]} /> */}
      <SafeAreaView style={{flex: 1, backgroundColor }}>
        {children}
      </SafeAreaView>
      {/* <SafeAreaView style={[{ flex: 0 }, bottomStyle]} /> */}
    </>
  );
};
ScreenContainer.defaultProps = defaultProps;
export default ScreenContainer;
