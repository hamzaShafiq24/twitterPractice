import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createUserWithEmailAndPassword, signUpUsingFirebase } from '../../../FirebaseHelper'
import { navigate } from '../firebaseMainNavigation'
import database from '@react-native-firebase/database';


const SignupScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [processing, setProcessing] = useState(false)

    const onPressSignUp = () => {
        if (email != "" && password != "") {
            setProcessing(true)
            const personObject = {
                uid: `${Math.floor(Math.random() * 1234567890643)}`,
                email,
                password,
                name,
                phoneNumber,
                image: "https://i.pravatar.cc/80"
            }
            signUpUsingFirebase(personObject)
                .then((result) => {
                    console.log(result, 'result Form OnPressSignUP')
                    setEmail("")
                    setPassword("")
                    setName("")
                    setPhoneNumber("")
                    setProcessing(false)
                    navigate('Login')
                })
                .catch((error) => {
                    console.log(error)
                    setProcessing(false)
                    Alert.alert(error.message)
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
                    <Text style={{ fontWeight: 'bold', fontSize: 19,color:'black' }}>Sign Up</Text>
                </View>


                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                        style={[styles.textInputStyle]} 
                         />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={(txt) => setPassword(txt)}
                        style={styles.textInputStyle} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        placeholder='Full Name'
                        value={name}
                        onChangeText={(txt) => setName(txt)}
                        style={styles.textInputStyle} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChangeText={(txt) => setPhoneNumber(txt)}
                        style={styles.textInputStyle} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity
                        style={styles.buttonView}
                        onPress={onPressSignUp}
                    >
                        {processing ?
                            <ActivityIndicator size={'small'} color="white" /> :
                            <Text style={{ color: 'white', fontSize: 17 }}>Sign Up</Text>
                        }
                    </TouchableOpacity>
                </View>


                <View style={{ marginTop: 5 }}
                >
                    <Text
                        onPress={() => navigate('Login')}>
                        Already have account? <Text style={{ fontWeight: 'bold',color:"black" }}>Login</Text></Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignupScreen

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