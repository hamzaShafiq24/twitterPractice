import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Interactable from 'react-native-interactable';


const LiveHead = () => {
  return (
        <Interactable.View
          snapPoints={[
            { x: -140, y: 0 }, { x: -140, y: -120 }, { x: -140, y: 120 }, { x: -140, y: -250 }, { x: -140, y: 250 },
            { x: 140, y: 0 }, { x: 140, y: 120 }, { x: 140, y: -120 }, { x: 140, y: -250 }, { x: 140, y: 250 }]}
          initialPosition={{ x: -140, y: -250 }}>
          <TouchableOpacity style={styles.head} onPress={()=>console.log('hai')} />
        </Interactable.View>
  )
}

export default LiveHead

const styles = StyleSheet.create({
    head: {
        width: 70,
        height: 70,
        backgroundColor: '#EE2C38',
        borderRadius: 35
      }
})
