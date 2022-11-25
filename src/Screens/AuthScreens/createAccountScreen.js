import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ScreenContainer from '../../Components/AbstractComponents/abstractScreenContainer'
import AbstractContentContainer from '../../Components/AbstractComponents/abstractContentContainer'
import AbstractHeaders from '../../Components/AbstractComponents/abstractHeaders'
import AbstractTextInput from '../../Components/AbstractComponents/abstractTextInput'
import { Colors, Fonts } from '../../Theme'
import { moderateScale } from 'react-native-size-matters'
import AbstractButtonSimple from '../../Components/AbstractComponents/AbstractButtons/abstractButtonSimple'
import { goBack } from '../../Navigation/mainNavigation'
import FocusAwareStatusBar from '../../Components/AbstractComponents/statusBarConfiguration'


const SH = Dimensions.get('window').height


const CreateAccountScreen = () => {

  const userNameValue = (txt) => {
    console.log(txt)
  }

  const emailValue = (txt) => {
    console.log(txt)
  }


  return (
    <ScreenContainer >
      <View style={styles.mainContainer}>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />

        <AbstractContentContainer width={'85%'}  >
          <AbstractHeaders onPressLeft={()=>goBack()} />

          <View style={{ marginTop: 20 }}>
            <Text style={styles.textOne}>Create your account</Text>
          </View>

          <View style={styles.viewOne}>

            <View style={{ marginTop: 50 }}>
              <View style={{ marginTop: 20 }}>
                <AbstractTextInput onValueGet={userNameValue} placeholder={'@username'} />
              </View>

              <View style={{ marginTop: 40 }}>
                <AbstractTextInput onValueGet={emailValue} placeholder={'Email Address'} />
              </View>
            </View>
          </View>

        </AbstractContentContainer>

        <View style={{ width: '100%', height: 1, backgroundColor: Colors.greyPrimaryOne }}>
          <AbstractContentContainer width={'85%'}  >
            <View style={{alignItems:'flex-end',paddingTop:20}} >
             <AbstractButtonSimple width={'25%'} label={"Next"} backgroundColor={Colors.blackPrimary} />
            </View>
          </AbstractContentContainer>
        </View>

      </View>
    </ScreenContainer>
  )
}

export default CreateAccountScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  viewOne: {
    width: '100%',
    height: SH * 0.70

  },
  textOne: {
    fontSize: moderateScale(26, 0.1),
    fontFamily: Fonts.bold,
    color: Colors.blackPrimary,
  },
})