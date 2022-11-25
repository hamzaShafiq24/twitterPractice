import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import MyPermissionsController from '../Permissions/permissionsController'
import RNFetchBlob from 'rn-fetch-blob';
import DeepAR from 'react-native-deepar';

const SDK_KEY_DEEP_AR = "1b82d5a1554836d09bf77396a02475ff43d8d5f40a79397ce94a2b92ccdcf1eadc292650cd644c91"



const SnapchatFiltersScreen = () => {

    const [cameraStatus, setCameraStatus] = useState("")
    const deepARRef = useRef(null);

    useEffect(() => {
        MyPermissionsController.resolveCameraPermission()
            .then((result) => {
                     setCameraStatus(result)
            })
            .catch((error) => {
                console.log(error, 'error')
            })

    }, [])


    console.log(cameraStatus,'cameraStatuscameraStatus')

    return (
        <DeepAR
        ref={deepARRef}
        apiKey={SDK_KEY_DEEP_AR}
        style={styles.mainContainer}
        // onInitialized={() => {

        // }}
      />
    )
}

export default SnapchatFiltersScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})