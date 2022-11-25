import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { dateToShortTime } from './MyMessage'

const ConversationItem = ({ item, onPress }) => {

    const defaultName = item?.name ? item?.name : "name here"
    const defaultLastMessage = item?.lastMessage ? item?.lastMessage : "last message...."

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={styles.mainContainer}>
            <View style={styles.imageContainer}>

                <View style={[styles.imageView, { borderWidth: 4, borderColor: "red" }]}>
                    <Image source={{ uri: item.image }} style={{ height: 56, width: 56, borderRadius: 68 }} />
                </View>

            </View>
            <View style={styles.detailsContainer}>

                <Text style={{ fontWeight: 'bold', color: "black" }}>
                {((item?.name)?.length > 20) ?
                                    (((item?.name).substring(0, 20 - 3)) + '...') :
                                    defaultName}
                    </Text>
            
                <Text style={{ color: 'grey' }}>
                    {((item?.lastMessage).length > 35) ?
                        (((item?.lastMessage).substring(0, 35 - 3)) + '...') :
                        defaultLastMessage}
                </Text>

                <View style={{ width: "95%", alignItems: "flex-end",position:'absolute',bottom:10,right:20 }}>
                    {item?.sendTime ?
                        <Text style={{ color: "grey", fontSize: 11 }}>{dateToShortTime(item?.sendTime)}</Text>
                        :
                        <Text style={{ color: "grey", fontSize: 11 }}>{dateToShortTime(item?.createdAt)}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ConversationItem

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
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
        marginVertical: 5
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: 'center',
        width: '20%',
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
        width: '80%',
        height: '100%',
        // backgroundColor: 'grey',
        paddingLeft: 15,
        justifyContent: 'center',
    }
})