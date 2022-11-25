import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SenderStyle, SenderDateStyle,ReceiverStyle,ReceiverDateStyle } from './messageStyles'
import ClockSvg from '../Assets/Icons/clockSvg'
import RefreshIconSvg from '../Assets/Icons/refreshIconSvg'
import { currentUser } from '../../../../FirebaseHelper'

export const dateToShortTime = (date_) => {
    /// TODO: Past time format code here
    let date = new Date(date_);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}



const MyMessage = ({children, message}) => {
    
    const isSender = message.from == currentUser().uid
  
    const handleResend = (message) => {
    }


    return (
        <View 
        style={{ width: '100%', justifyContent: 'flex-start', flexDirection: isSender? "row-reverse": "row" }}
        >
            <View style={{flex:1, maxWidth: 24, justifyContent:"center", alignItems:"center"}}>
                {/* {
                    message.status === "sent" ?
                    <ClockSvg size={12}/>
                    :false
                } */}
            </View>
            <View style={isSender ? SenderStyle : ReceiverStyle}>
                 { React.cloneElement(children, {isSender})}
                <View style={{ alignItems: isSender ? 'flex-end' : 'flex-start'  }}>
                    <Text style={isSender ? SenderDateStyle : ReceiverDateStyle}>{dateToShortTime(message.sendTime)}</Text>
                </View>
            </View>
            <View style={{flex:1, maxWidth: 50 ,justifyContent:"center", paddingLeft:5}}>
                {/* {
                    message.status == "error"  ?
                    <TouchableOpacity 
                    onPress={()=>handleResend(message)}
                    style={{width: 40, justifyContent:"center", alignItems:"center"}}>
                        <RefreshIconSvg color={"red"}/>
                        <Text style={{fontSize: 10, marginRight: -2, color:"red"}}>Resend</Text>
                    </TouchableOpacity>: false
                } */}
            </View>
        </View>
    )
}

export default MyMessage

const styles = StyleSheet.create({})