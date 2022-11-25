import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




const CommentCounter = () => {

    return (
        <View style={styles.viewOne} >
            <View style={styles.triangleCorner} />

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                {[0, 0].map((item, index) => {
                    return (
                        <View style={[styles.commentNameView,{borderWidth:3,borderColor:'white',zIndex:index == 0?999:-1,position:"absolute",left:index == 0? -35:-5}]} key={index}>
                            <Text style={{ fontSize: 17, color: "white",fontWeight:'600' }}>{index == 0 ?"A":"A"}</Text>
                        </View>
                    )
                })}
            </View>

        </View>
    )

}





const PracticeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <CommentCounter />
        </View>
    )
}

export default PracticeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor:"lightgrey"
    },
    viewOne: {
        width: 80,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        position: "relative",
        justifyContent: 'center',
        alignItems: 'center'
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: "transparent",
        borderTopColor: "white",
        transform: [{ rotate: "270deg" }],
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    commentNameView: {
        width: 40,
        height: 40,
        borderRadius: 35,
        backgroundColor: 'green',
        justifyContent: "center",
        alignItems: 'center'
    }
})