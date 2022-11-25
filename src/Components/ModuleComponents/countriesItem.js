import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CountriesItem = ({ item }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`Code: ${item.code}`}</Text>
            <Text>{`Native: ${item.native}`}</Text>
            <Text>{`Phone: +${item.phone}`}</Text>
            <Text>{`Capital: ${item.capital}`}</Text>
            <Text>{`Currency: ${item.currency}`}</Text>
            <Text>{`Flag: ${item.emoji}`}</Text>
        </View>
    )
}

export default CountriesItem

const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        marginVertical: 5,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 4,
    }
})