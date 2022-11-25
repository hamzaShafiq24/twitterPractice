import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PieGraph from '../Components/ModuleComponents/pieGraph'
import PieGraphV2 from '../Components/ModuleComponents/pieGraphV2'
import AbstractModal from '../Components/AbstractComponents/abstractModal'

const expenseDetails = [
  {
    name: "office",
    amount: 7000
  },
  {
    name: "salary",
    amount: 9000
  },
  {
    name: "supplies",
    amount: 1000
  },
  {
    name: "supplies",
    amount: 1000
  },
  {
    name: "supplies",
    amount: 1000
  },
  {
    name: "hamza",
    amount: 1000
  },
]

const PieChartScreen = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState({})

  const onPressSector = (value, selectedSectorData) => {
    setModalVisible(value)
    setModalData(selectedSectorData)
  }

  return (
    <View style={styles.mainContainer}>

      <PieGraphV2 onPressSector={onPressSector} data={expenseDetails} />

      <AbstractModal
        isVisible={modalVisible}
      >
        <View style={{ height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }} >
          <Button title={"close"} onPress={() => setModalVisible(false)} />
          <Text>{modalData?.label}</Text>
        </View>
      </AbstractModal>

    </View>
  )
}

export default PieChartScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})