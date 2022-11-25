import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import SharedBottomSheetContainer from '../Components/ModuleComponents/sharedBottomSheetContainer';

const DetailScreenAspect = ({ route, navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <SharedBottomSheetContainer
                navigation={navigation}
                title={'Choose only one Item'}
                height={450}
                topContent={()=>{
                    return(
                    <View style={{width:'90%',height:"60%",backgroundColor:"green",alignSelf:'center'}}>

                    </View>
                    )
                }}
            >
                <View style={styles.boxView}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ width: '90%', height: 50, backgroundColor: 'pink', alignSelf: "center", borderRadius: 10, marginVertical: 20 }} />
                </View>
            </SharedBottomSheetContainer>
        </SafeAreaView >
    )
}

export default DetailScreenAspect

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    boxView: {
        width: "100%",
        height: 400,
        backgroundColor: 'red',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    }
})


