import { StyleSheet, Text, View, TextInput, Button, SafeAreaView,ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { clearAndNavigate, navigate } from '../firebaseMainNavigation'
import { logInUsingFirebase, signInWithEmailAndPassword } from '../../../FirebaseHelper'

const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [processing, setProcessing] = useState(false)


  const onPressLogin = () => {
    if (email != "" && password != "") {
      setProcessing(true)
      logInUsingFirebase(email, password,()=>{
        setProcessing(false)
      })
        .then((result) => {
          console.log(result, 'result Form onPressLogin')
          setEmail("")
          setPassword("")
          setProcessing(false)
          clearAndNavigate('App')
        })
        .catch((error) => {
          console.log(error)
          setProcessing(false)
        })
    }
    else {
      console.log("Email or password is empty")
    }
  }


  return (
    <SafeAreaView style={styles.mainContainer}>

      <View style={{ width: '90%', alignSelf: "center" }}>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 100 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 19,color:'black' }}>Log In</Text>
        </View>

        <View style={{ marginVertical: 10 }}>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={(txt) => setEmail(txt)}
            style={[styles.textInputStyle]} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={(txt) => setPassword(txt)}
            style={styles.textInputStyle} />
        </View>

        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={onPressLogin}
          >
            {processing ?
              <ActivityIndicator size={'small'} color="white" /> :
              <Text style={{ color: 'white', fontSize: 17 }}>Login</Text>
            }
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 5 }}
        >
          <Text
            onPress={() => navigate('SignUp')}>
            Need Account? <Text style={{ fontWeight: 'bold',color:"black" }}>SignUp</Text></Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'white'
  },
  textInputStyle: {
    width: '100%',
    height: 50,
    color: 'black',
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 10
  },
  buttonView: {
    backgroundColor: 'red',
    width: '100%',
    height: 50,
    justifyContent: "center",
    alignItems: 'center'
  }
})