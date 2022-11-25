import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';

const arrayData = [
    {
        id: 0,
        imageUrl: require('../Assets/Images/cardPicOne.jpg'),
        title: 'Paris'
    },
    {
        id: 1,
        imageUrl: require('../Assets/Images/cardPicTwo.jpg'),
        title: 'Ontario'
    },
]


const Card = ({ item, onPress }) => {

    const defaultTitle = item.title ? item.title : 'text'

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.cardMainView}>

            {/* <SharedElement id={`item.${item.id}.photo`} style={styles.viewOne}>
                    <Image resizeMode="cover" source={item.imageUrl} style={{ width: '100%', height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
            </SharedElement>

            <SharedElement id={`item.${item.id}.title`} style={styles.viewTwo}>
                <Text style={{ fontWeight: '600', fontSize: 16 }}>{defaultTitle}</Text>
            </SharedElement> */}


            <SharedElement id={`item.${item.id}.card`} >
                <View style={styles.viewOne}>
                <Image resizeMode="cover" source={item.imageUrl} style={{ width: '100%', height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                </View>
      

            <View style={styles.viewTwo}>
                <Text style={{ fontWeight: '600', fontSize: 16,color:'white' }}>{defaultTitle}</Text>
            </View>
            </SharedElement>
            
        </TouchableOpacity>
    )
}

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            {arrayData.map((item, index) => {
                return (
                    <Card key={index} item={item} onPress={() => navigation.push('Detail', { item })} />
                )
            })}
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    cardMainView: {
        width: "80%",
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20
    },
    viewOne: {
        width: '100%',
        height: '70%',
        backgroundColor: 'black',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    viewTwo: {
        width: '100%',
        height: '30%',
        // backgroundColor: '#FADCD9',
        backgroundColor: '#F5C7A9',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 20,
        paddingTop: 10
    },

})