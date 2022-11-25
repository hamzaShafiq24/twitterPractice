import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { sendMessage } from '../../../FirebaseHelper';
import SenButtonSvg from '../Components/Assets/Icons/senButtonSvg';
import Toast from 'react-native-simple-toast';



const ChatFooter = ({ conversationData }) => {

  const [messageBody, setMessageBody] = useState("");

  const onSend = () => {
    if (messageBody != "") {
      sendMessage(conversationData, messageBody)
        .then((result) => {
          console.log('Successfully Send Message')
          setMessageBody("")
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      Toast.show('Enter Something!', Toast.SHORT);
    }
  }

  return (
    <>
      {/* <KeyboardAvoidingView
         keyboardVerticalOffset={Platform.OS === "android" ? 0 : 110} 
         behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={styles.viewLast}
      > */}
      <View
        style={styles.viewLast}
      >
        <View style={styles.viewLastB}>
          <TextInput
            style={styles.txtInputView}
            placeholder="Type message ..."
            placeholderTextColor={"grey"}
            value={messageBody}
            onChangeText={setMessageBody} />
        </View>
        <View style={styles.viewLastC}>

          <TouchableOpacity
            onPress={onSend}
            style={{ width: '50%', height: "100%", justifyContent: 'center', alignItems: 'center' }}  >
            <SenButtonSvg color={'red'} />
          </TouchableOpacity>

        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  viewLast: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center'
  },

  viewLastB: {
    flex: 1,
    paddingLeft: 10,
    height: 55,
    justifyContent: 'center',
  },
  viewLastC: {
    width: '10%',
    height: 55,
    flexDirection: 'row',
  },
  txtInputView: {
    width: '95%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingLeft: 15,
    fontSize: 14,
    color: '#50555C',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 0.9,
  },
});
