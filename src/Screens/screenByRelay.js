import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchGraphQL } from '../Relay/fetchGraphQL';

const ScreenByRelay = () => {


    useEffect(() => {
        console.log('ScreenByRelay Mounted')

        fetchGraphQL()
            .then((result) => {
                console.log(result, 'result')
            })
            .catch((error) => {
                console.log(error, 'error')
            })

        return () => {
            console.log('ScreenByRelay unMounted')
        }
    }, [])


    return (
        <View>
            <Text>ScreenByRelay</Text>
        </View>
    )
}

export default ScreenByRelay

const styles = StyleSheet.create({})