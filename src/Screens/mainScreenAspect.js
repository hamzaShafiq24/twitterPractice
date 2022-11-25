import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SharedBottomSheetContainer from '../Components/ModuleComponents/sharedBottomSheetContainer';


const MainScreenAspect = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <SharedBottomSheetContainer
                navigation={navigation}
                title={'Choose only one Item'}
                height={150}
                topContent={()=>{
                    return(
                    <View style={{width:'90%',height:"60%",backgroundColor:"green",alignSelf:'center'}}>

                    </View>
                    )
                }}
            >
                <View style={styles.boxView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail")}
                        style={{ width: "90%", height: 50, backgroundColor: 'pink', alignSelf: "center", borderRadius: 10, marginVertical: 20 }} />
                </View>
            </SharedBottomSheetContainer>
        </SafeAreaView>
    )
}

export default MainScreenAspect

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    boxView: {
        width: "100%",
        backgroundColor: 'red',
        height: 110,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    }
})