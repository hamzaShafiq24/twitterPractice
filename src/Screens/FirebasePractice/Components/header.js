import { StyleSheet, Text, View, Image, TouchableOpacity,ActivityIndicator, Alert } from 'react-native'
import React,{useState} from 'react'
import { currentUser, logOutFromApp } from '../../../FirebaseHelper'
import { clearAndNavigate, navigate } from '../firebaseMainNavigation'

const Header = () => {

    const loggedInUser = currentUser()
    const [processing, setProcessing] = useState(false)

    const onPressLogOut = () => {
        setProcessing(true)
        logOutFromApp()
            .then(() => {
                setProcessing(false)
                clearAndNavigate('Auth')
            })
            .catch((error) => {
                setProcessing(false)
                Alert.alert(error)
            })
    }




    return (
        <View style={styles.mainContainer}>
            <View style={{ width: '95%', alignSelf: 'center', height: '100%', flexDirection: "row" }}>

                <View style={styles.imageContainer}>
                    <View style={[styles.imageView, { borderWidth: 4, borderColor: "red" }]}>
                        <Image source={{ uri: loggedInUser?.image }} style={{ height: 66, width: 66, borderRadius: 68 }} />
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Wel Come,</Text>
                        <Text style={{ fontWeight: 'bold', color: 'red' }}>{loggedInUser?.name}</Text>
                        <Text style={{fontSize:13}}>{loggedInUser?.email}</Text>
                    </View>
                </View>


                <View style={styles.detailsContainer}>
                    <TouchableOpacity
                        onPress={onPressLogOut}
                        style={{ padding: 5, backgroundColor: 'red', borderRadius: 10 }}
                    >
                        {processing ?
                            <ActivityIndicator size={'small'} color="white" />
                            :
                            <Text style={{ color: 'white', fontSize: 13 }}>Log out</Text>
                        }
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        // flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginVertical: 5
    },
    imageContainer: {
        // justifyContent: "center",
        alignItems: 'center',
        width: '80%',
        height: '100%',
        flexDirection: 'row'
        // backgroundColor: 'red'
    },
    imageView: {
        width: 70,
        height: 70,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: 'center'
    },
    detailsContainer: {
        width: '20%',
        height: '100%',
        // backgroundColor: 'grey',
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})