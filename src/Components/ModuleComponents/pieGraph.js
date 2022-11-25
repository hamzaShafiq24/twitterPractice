import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width

const data = [
    {
        name: `Office Expense $10000`,
        amount: 10000,
        color: "#BF4344",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Salary",
        amount: 10000,
        color: "#EF5455",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Supplies",
        amount: 10000,
        color: "#FDEEEE",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Supplies",
        amount: 10000,
        color: "#FACCCC",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Supplies",
        amount: 10000,
        color: "#F7AAAA",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false // optional
  };

const PieGraph = () => {
    return (
        <View>
            <PieChart
                data={data}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                accessor={"amount"}
                hasLegend={false}
                // backgroundColor={"transparent"}
                // paddingLeft={"15"}
                center={[screenWidth/4, 0]}
                // absolute
            />
        </View>
    )
}

export default PieGraph

const styles = StyleSheet.create({})