import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'

const LoginScreen = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginValid, setLoginValid] = useState(false)
    const [passValid, setPassValid] = useState(false)

    const loginOnChange = (txt) => {
       setLogin(txt)
       if(txt.length <6){
        setLoginValid(true)
       }
       else{
        setLoginValid(false)
       }
    }

    const passwordOnChange = (txt) => {
        setPassword(txt)
        if(txt.length <6){
            setPassValid(true)
           }
           else{
            setPassValid(false)
           }
    }

    const _handleLogin = () => {
          if(!loginValid && !passValid){
           console.log('hamza')
          }
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.viewOne} >
                <View style={{width:'100%',height:50,alignItems:'center',marginTop:10}}>
                    <View style={{width:100,height:50}}>
                    <Image source={require('../../Assets/Images/logo.png')} style={{width:100,height:50}} />
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: 80 }}>
                    <View style={{ marginTop: 30 }}>
                        <TextInput
                            style={styles.textInputView}
                            placeholder={'UserName'}
                            value={login}
                            onChangeText={loginOnChange}
                        />
                        <View style={{ width: '100%', height: 20 }}>
                            {loginValid ?
                                <Text style={{ color: 'red' }}>*username must be valid</Text>
                                : false}
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            style={styles.textInputView}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={passwordOnChange}
                        />
                        <View style={{ width: '100%', height: 20 }}>
                            {passValid ?
                                <Text style={{ color: 'red' }}>*password must be valid</Text>
                                : false}
                        </View>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            style={styles.btnView}
                            onPress={_handleLogin}
                        >
                            <Text style={{ color: 'white' }}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ECECEC'
    },
    viewOne: {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
    },
    textOne: {
        fontSize: moderateScale(20, 0.1),
        fontWeight: '500'
    },
    textInputView: {
        borderWidth: 0.5,
        borderColor: '#C5383C',
        height: 50,
        paddingLeft: 5
    },
    btnView: {
        width: '100%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C5383C'
    }
})