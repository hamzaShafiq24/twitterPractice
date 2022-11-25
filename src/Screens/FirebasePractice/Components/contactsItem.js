import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ContactsItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={styles.mainContainer}>
            <View style={styles.imageContainer}>

                <View style={[styles.imageView, { borderWidth: 4, borderColor: "red" }]}>
                    <Image source={{ uri: item.image }} style={{ height:56, width: 56, borderRadius: 68 }} />
                </View>

            </View>
            <View style={styles.detailsContainer}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text>{item.phoneNumber}</Text>
                <Text>{item.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ContactsItem

const styles = StyleSheet.create({
    mainContainer: {
        width: '99%',
        alignSelf:"center",
        height: 85,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginVertical:5
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: 'center',
        width: '25%',
        height: '100%',
        // backgroundColor: 'red'
    },
    imageView: {
        width: 60,
        height: 60,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: 'center'
    },
    detailsContainer: {
        width: '75%',
        height: '100%',
        // backgroundColor: 'grey',
        paddingLeft: 15,
        justifyContent: 'center',
    }
})