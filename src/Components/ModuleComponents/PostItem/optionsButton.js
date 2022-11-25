import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const OptionsButton = ({ icon, label, noLabel, onPress }) => {

    const defaultLabel = label ? label : 0
 

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", width: '25%', height: '100%' }}>
            <View>
                {icon ? icon() : false}
            </View>
            {noLabel ? false :
                <View style={{ paddingLeft: 2 }}>
                    <Text style={styles.textFive}>{defaultLabel}</Text>
                </View>
            }
        </TouchableOpacity >
    )
}

export default OptionsButton

const styles = StyleSheet.create({})