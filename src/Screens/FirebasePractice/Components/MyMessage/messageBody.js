import { StyleSheet, Text, View, Image,TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { SenderText, ReceiverText } from './messageStyles'
import { currentUser } from '../../../../FirebaseHelper'


const MessageMedia = ({ message }) => {
    const isSender = message.from == currentUser().uid
    // if (message.files) {
    //     return message.files.map((item) => {
    //         if (item.filetype == "image/png" || item.type == "image/png") {
    //             return (
    //                 <TouchableOpacity 
    //                 activeOpacity={0.8}
    //                 onPress={()=> navigate('MediaPreview', { mediaDetails: { mediaType: "Image", source: item.url,purpose:'preview' } })}
    //                 style={{ width: 200, maxHeight: 200, margin: 2, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
    //                     <ImageContainer loading={message.loading} url={item.url || item.uri} />
    //                 </TouchableOpacity>
    //             )
    //         }
    //         else if (item.filetype == "audio/mp3" || item.type == "audio/mp3") {
    //             return (
    //                <AudioPlayerChatUi loading={message.loading} url={item.url || item.uri} isSender={isSender} senderData={AuthController.currentUser()} />
    //             )
    //         }
    //         else if (item.filetype == "video/mp4" || item.type == "video/mp4") {
    //             return (
    //                 <View style={{ width: 200, maxHeight: 200, margin: 2, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
    //                     <VideoContainer loading={message.loading} url={item.url || item.uri} />
    //                 </View>
    //             )
    //         }
    //         else {
    //             return (
    //                 <View style={{ width: 200, maxHeight: 200, margin: 2, borderTopLeftRadius: 16, borderTopRightRadius: 16,justifyContent:'center',alignItems:'center' }}>
    //                     <ImageContainer loading={message.loading} url={item.url || item.uri} />
    //                     {/* <ActivityIndicator size={'small'} color={'white'} /> */}
    //                 </View>
    //             )
    //         }
    //     })

    // }

}


const MessageText = ({ message }) => {

    const isSender = message.senderId == currentUser().uid

    return (
        <View>
            <Text style={isSender ? SenderText : ReceiverText}>{message?.message}</Text>
        </View>
    )
}


const MessageBody = ({ item }) => {


    switch (item.messageType) {
        // case 'media':
        //     return <MessageMedia message={item} />
        //     break;
        case 'Text':
            return <MessageText message={item} />
            break
        default: return <MessageText message={item} />
    }

}

export default MessageBody

const styles = StyleSheet.create({})