import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../Components/backButton'

const ChatHeader = ({ headerDetails }) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.viewOne}>
                <BackButton color={"grey"} />
                <Text style={styles.textOne}>{headerDetails.name}</Text>
            </View>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 55,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    viewOne: {
        width: '100%',
        height: "100%",
        alignItems: "center",
        flexDirection: "row"
    },
    textOne: {
        fontSize: 18,
        fontWeight: "700",
        color: 'red'
    }
})