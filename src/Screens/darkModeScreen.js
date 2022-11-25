import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import light from '../light'
import dark from '../dark'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build(light);

const DarkModeScreen = () => {

    const [shouldRender, setShouldRender] = useState(true)

    const toggleTheme = () => {
        const theme = EStyleSheet.value('$theme') === 'light' ? dark : light;
        EStyleSheet.build(theme);
        setShouldRender((prev)=>!prev)
    }
        const buttonTitle = EStyleSheet.value('$theme') == 'light' ? 'Set dark theme' : 'Set light theme';
        return (
            <View style={styles.mainContainer}>
                <Button title={buttonTitle} color={"red"} onPress={toggleTheme} />
            </View>
        )

}

export default DarkModeScreen

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "$bgColor"
    }
})