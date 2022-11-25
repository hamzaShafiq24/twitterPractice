import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
    // console.log(item, 'detailScreen')
    return (
        <>
            {/* <SharedElement id={`item.${item.id}.photo`} style={{flex:1}}>
                <Image source={item.imageUrl} style={{ width: "100%", height: '100%' }} />
            </SharedElement>

            <SharedElement id={`item.${item.id}.title`}>
                <View style={{ ...StyleSheet.absoluteFillObject }} >
                    <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ width: '100%', height: 200, backgroundColor: '#FADCD9' }}>
                            <View style={{ paddingLeft: 20, paddingTop: 15 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SharedElement > */}


            <SharedElement id={`item.${item.id}.card`} style={{flex:1}}>
                <Image source={item.imageUrl} style={{ width: "100%", height: '100%' }} />
            
                    <View style={{position:'absolute',bottom:50,left:0,right:0}}>
                        {/* <View style={{ width: '100%', height: 200, backgroundColor: '#FADCD9' }}> */}
                            <View style={{ paddingLeft: 20, paddingTop: 15 }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>{item.title}</Text>
                            </View>
                        {/* </View> */}
                    </View>
            </SharedElement >
        </>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'red'
    }
})