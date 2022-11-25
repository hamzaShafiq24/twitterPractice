import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from "@react-native-material/core";

export const VARIANT = {
    outlined: "outlined",
    standard: "standard"
}

const TextInputMUI = ({ label, leadingIcon, trailingIcon, variant, color, helperText, errorMessage, error,value,onChangeText }) => {

    const defaultLabel = label ? label : "label"
    const defaultVariant = variant ? variant : undefined
    const defaultColor = color ? color : "black"
    const defaultHelperText = helperText ? helperText : undefined


    return (
        <>
            <TextInput
                label={defaultLabel}
                leading={() => leadingIcon ? leadingIcon() : false}
                trailing={() => trailingIcon ? trailingIcon() : false}
                variant={defaultVariant}
                color={defaultColor}
                helperText={defaultHelperText}
                value={value}
                onChangeText={onChangeText}
            />
            <View>
                {error ?
                    <Text style={styles.errorMessageTextStyle}>{errorMessage}</Text>
                    : false}
            </View>
        </>
    )
}

export default TextInputMUI

const styles = StyleSheet.create({
    errorMessageTextStyle:{
        color:"red",
        paddingLeft:10
    }
})