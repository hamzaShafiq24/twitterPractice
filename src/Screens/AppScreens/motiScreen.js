import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { MotiView, MotiText, useAnimationState } from 'moti'
import { AnimatePresence } from 'moti'

const MotiScreen = () => {

    const [visible, setVisible] = useState(true)

    const animationState = useAnimationState({
        from: {
          opacity: 0,
          scale: 0.9,
        },
        to: {
          opacity: 1,
          scale: 1.1,
        },
        active: {
            scale: 1.1,
            opacity: 1,
          },
      })

      const onPress = () => {
        animationState.transitionTo((currentState) => {
            if (currentState === 'from') {
              return 'active'
            }
            return 'to'
          })
      }

    return (
        <SafeAreaView style={styles.mainCOntainer}>
            <TouchableOpacity
            onPress={onPress}
            >
                <MotiView state={animationState} style={{ height: 100, width: 100, backgroundColor: 'red' }}
                >
                </MotiView>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MotiScreen

const styles = StyleSheet.create({
    mainCOntainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})