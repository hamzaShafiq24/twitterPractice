import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../Theme'
import CheckedSvg from '../../Assets/Icons/CommonSvgs/checkedSvg'
import { moderateScale } from 'react-native-size-matters'

const AbstractTextInput = ({ onValueGet ,placeholder }) => {

    const [focus, setFocus] = useState(false)
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState('')

    const isChecked = (txt) => {
        setInput(txt)
        onValueGet(txt)
        var regEx = /^[a-z0-9]+$/i
        if(txt.match(regEx))
          {
            setChecked(true)
          }
        else
          {
            setChecked(false)
          }

    }

    return (
        <View style={[styles.mainContainer, { borderBottomColor: focus ? Colors.skyBluePrimary : Colors.greyPrimaryOne }]}>
            <View style={styles.viewOne} >
                <TextInput
                    style={styles.textInputStyle}
                    value={input}
                    onChangeText={isChecked}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.greyPrimary}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </View>

            <View style={styles.viewTwo}>
                {checked ?
                    <CheckedSvg />
                    : false}
            </View>

        </View>
    )
}

export default AbstractTextInput
AbstractTextInput.defaultProps = {
    placeholder: 'Text Here'
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 45,
        borderBottomWidth: 2,
        flexDirection: 'row'
    },
    viewOne: {
        width: '90%',
        height: '100%',
    },
    textInputStyle: {
        width: "100%",
        height: '100%',
        fontFamily: Fonts.default,
        fontSize: moderateScale(16, 0.1),
        color: Colors.blackPrimary
    },
    viewTwo: {
        width: '10%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    }
})