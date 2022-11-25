import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React,{useEffect, useState} from 'react'
import { VictoryContainer, VictoryPie } from 'victory-native'

const screenWidth = Dimensions.get("window").width
const GRAPH_WIDTH = screenWidth * (390/390)
const GRAPH_HEIGHT = GRAPH_WIDTH * (170/200)


const PieGraphV2 = ({onPressSector,data}) => {
 
    const [dataPieChart,setDataPieChart] = useState([])

    useEffect(()=>{
        if(data){
          const preparedArray = data.map((item,index)=>{
            const sectorPercentage = item.amount /100 *100
            return {
                x:index,
                y:sectorPercentage,
                label:`${item.name}\n$${item.amount}`
            }
           })
           setDataPieChart(preparedArray)
        }
    },[])

    return (
        <View >
            <VictoryPie
                data={dataPieChart}
                categories={{ x: ["Office Expense", "Salary", "Supplies", "Supplies", "Supplies"] }}
                colorScale={["#BF4344", "#EF5455", "#FDEEEE", "#FACCCC", "#F7AAAA"]}
                containerComponent={<VictoryContainer responsive={true} />}
                height={GRAPH_HEIGHT}
                width={GRAPH_WIDTH}
                style={{
                    data: {stroke: "white", strokeWidth:1.5 },
                    // labels: { fill: ({ text }) => text[0] == "Supplies" ? "#EF5455" : "white", fontSize: 13 / fontScale, fontWeight: "600", textAlign:'center' },
                    labels: { fill:"#EF5455" , fontSize: 14, fontWeight: "600" },
                    parent: { border: "1px solid #ccc" }
                }}
                // labelRadius={({ innerRadius }) => innerRadius + 350 / 6.2}
                events={[{
                    target: "data",
                    eventHandlers: {
                        onPress: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: (props) => {
                                        onPressSector(true,props.datum)
                                        // return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                    }
                                },
                            ];
                        }
                    }
                }]}
            />
        </View>
    )
}

export default PieGraphV2

const styles = StyleSheet.create({})