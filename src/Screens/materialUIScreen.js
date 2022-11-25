import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActivityIndicatorMUI, { SIZE } from '../Components/MaterialUiComponents/activityIndicatorMUI'
import { Icon } from "@react-native-material/core";
import ButtonWithBadgeMUI, { INDICATOR_POSITION } from '../Components/MaterialUiComponents/buttonWithBadgeMUI';
import ReactLogoSvg from '../Assets/Icons/reactLogoSvg';
import { HStack, Banner, Button } from "@react-native-material/core";
import TextInputMUI, { VARIANT } from '../Components/MaterialUiComponents/textInputMUI';


const MaterialUIScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicatorMUI size={SIZE.large} />
      <ButtonWithBadgeMUI title={"hai"} />
      <TextInputMUI trailingIcon={()=><ReactLogoSvg size={20} /> } variant={VARIANT.outlined} />

    </View>
  )
}

export default MaterialUIScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent:"center",
    // alignItems:"center"
  }
})