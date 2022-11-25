import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useQuery, NetworkStatus } from '@apollo/client';
import { FETCH_COUNTRIES, FETCH_MY_COUNTRY, FETCH_SINGLE_COUNTRY } from '../../src/GraphQl/queries';
import CountriesItem from '../Components/ModuleComponents/countriesItem';
import useCountry from '../Hooks/useCountry';



const ScreenByGraphql = () => {

    // const { loading, error, data } = useCountry("AE"); ////Hook dynamic hai
    const [input, setInput] = useState('PK')
    const { loading, error, data, refetch, networkStatus } = useQuery(FETCH_COUNTRIES, {
        variables: { countryCode: input },
        notifyOnNetworkStatusChange: true,
        errorPolicy:'all'
        // pollInterval: 500,
    });

    // console.log(data)

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
    //             <ActivityIndicator size={'large'} color={'red'} />
    //         </View>
    //     )
    // }
    if (networkStatus === NetworkStatus.refetch) return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Refetching!</Text>
        </View>
    )

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>{`${error} in fetching data`}</Text>
            </View>
        )
    }

    // return false
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%',alignSelf:'center',marginBottom:20 }}>
                <TextInput
                    style={{ height: 50, width: '80%', borderWidth: 1 }}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <View style={{ width: '20%' }}>
                    <TouchableOpacity
                        onPress={() => refetch({ countryCode: input })}
                        style={{ width: '100%', height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Refetch</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {loading ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                        <ActivityIndicator size={'large'} color={'red'} />
                    </View> :
                    data.countries.map((item, index) => {
                        return (
                            <CountriesItem item={item} key={index} />
                        )
                    })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ScreenByGraphql

const styles = StyleSheet.create({})