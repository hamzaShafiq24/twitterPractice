import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Theme'

const Separator = () => {
  return (
            <View style={styles.separatorView} >
                <View style={styles.separatorViewOne} >
                    <View style={{ width: '100%', height: 1, backgroundColor:Colors.greyPrimaryOne }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '10%' }}>
                    <Text>or</Text>
                </View>
                <View style={styles.separatorViewOne} >
                    <View style={{ width: '100%', height: 1, backgroundColor: Colors.greyPrimaryOne }} />
                </View>
            </View>
  )
}

export default Separator

const styles = StyleSheet.create({
    separatorView: {
        flexDirection: 'row',
        width: '100%',
        height: 25,
    },
    separatorViewOne: {
        width: '45%',
        justifyContent: 'center'
    },
})