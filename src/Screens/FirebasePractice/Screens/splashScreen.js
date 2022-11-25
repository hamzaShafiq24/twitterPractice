import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ReduxDispatchController from '../../../Controllers/reduxDispatchController'
import { clearAndNavigate, navigate } from '../firebaseMainNavigation'
import database from '@react-native-firebase/database';
import { getCurrentUserData } from '../../../FirebaseHelper'

const SplashScreen = () => {


    useEffect(() => {
        getCurrentUserData()
            .then((result) => {
                // console.log(result, 'resultbvnbmn,m')
                if (result == null) {
                    navigate("Auth")
                }
                else {
                    ReduxDispatchController.AUTHENTICATION.setCurrentUser(result)
                    clearAndNavigate('App')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <View style={styles.mainContainer}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: "center"
    }
})