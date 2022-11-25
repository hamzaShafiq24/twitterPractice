import { StyleSheet, Text, View, SafeAreaView, Image,Dimensions } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';

const SW = Dimensions.get('window').width
const SH = Dimensions.get('window').height


const SharedBottomSheetContainer = ({ navigation, title, topContent, children, height }) => {

    const defaultTitle = title ? title : 'text'
    const defaultHeight = height ? height : 150

    return (
        <>
            <View style={{ width:'100%',backgroundColor: 'transparent',height:SH*0.9,position:'absolute',top:50}}>
                <SharedElement id={`item.top`} >
                    {topContent ? topContent() : false}
                </SharedElement>
            </View>

            <View
                style={{ height: defaultHeight, backgroundColor: 'transparent', justifyContent: "space-between", position: "absolute", bottom: 0, left: 0, right: 0 }}
            >
                <SharedElement id={`item.text`} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>{defaultTitle}</Text>
                </SharedElement>

                <SharedElement id={`item.card`}>
                    {children}
                </SharedElement>
            </View>
        </>
    )
}

export default SharedBottomSheetContainer

const styles = StyleSheet.create({})