import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import React,{useEffect,useState} from 'react'
import ScreenContainer from '../../Components/AbstractComponents/abstractScreenContainer'
import TwitterLogoSvg from '../../Assets/Icons/CommonSvgs/twitterLogoSvg'
import GoogleLogoSvg from '../../Assets/Icons/CommonSvgs/googleLogoSvg'
import { Colors, Fonts } from '../../Theme'
import { moderateScale, } from 'react-native-size-matters'
import AbstractContentContainer from '../../Components/AbstractComponents/abstractContentContainer'
import AbstractButtonSimple, { TYPES } from '../../Components/AbstractComponents/AbstractButtons/abstractButtonSimple'
import Separator from '../../Components/ModuleComponents/separator'
import {clearAndNavigate, navigate} from '../../Navigation/mainNavigation'
import TwitterLoader from '../../Components/ModuleComponents/twitterLoader'
import FocusAwareStatusBar from '../../Components/AbstractComponents/statusBarConfiguration'


const SW = Dimensions.get('window').width
const SH = Dimensions.get('window').height


const StartUpScreen = () => {
   
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])

    const onPressGoolge = () => {
       clearAndNavigate("App")
    }

    const onPressCreateAccount = () => {
        navigate('CreateAccount')
    }

   if(loading){
       return (
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TwitterLoader />
         </View>    
       )
   }
    
    return (
        <ScreenContainer>
            <View style={styles.mainContainer}>
                
                <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={Colors.whitePrimary} />
                <AbstractContentContainer>
                    <View style={styles.viewOne}>
                        <TwitterLogoSvg />
                    </View>
                    <View style={styles.viewTwo}>
                        <Text style={styles.textone}>
                            {`See what's happening \n in the world right now.`}
                        </Text>
                    </View>


                    <View style={styles.viewThree} >
                        <AbstractButtonSimple onPress={onPressGoolge} icon={()=><GoogleLogoSvg />} types={TYPES.iconAndText} label={'Continue with Google'} width={'100%'} />

                        <Separator />

                        <AbstractButtonSimple onPress={onPressCreateAccount} label={'Create Account'} width={'100%'} />
                    </View>

                    <View style={styles.viewFour}>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.textTwo}>By signing up, you agree to our <Text style={{ color: Colors.skyBluePrimary }} >Terms, Privacy Policy</Text> and <Text style={{ color: Colors.skyBluePrimary }} >Cookie Use.</Text> </Text>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.textTwo}>Have an account already? <Text style={{ color: Colors.skyBluePrimary }} >Log in</Text> </Text>
                        </View>
                    </View>

                </AbstractContentContainer>
            </View>
        </ScreenContainer>
    )
}

export default StartUpScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whitePrimary
    },
    viewOne: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    viewTwo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: SH * 0.57,
    },
    viewThree: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    viewFour: {
        width: '90%',
        alignSelf: 'center',
    },
    textone: {
        fontSize: moderateScale(27, 0.1),
        fontFamily: Fonts.bold,
        color: Colors.blackPrimary,
    },
    textTwo: {
        fontSize: moderateScale(12, 0.1),
        fontFamily: Fonts.default,
        color: Colors.greyPrimary,
    },
})
