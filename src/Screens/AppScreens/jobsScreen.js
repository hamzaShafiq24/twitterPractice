import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import OrderNumberButton from '../../Components/ModuleComponents/orderNumberButton'
import { ordersData } from '../../Utils/mocData'

const SH = Dimensions.get('window').height


const JobsScreen = () => {

    const [dataShow, setDataShow] = useState()
    const [combineData,setCombineData] = useState(ordersData)
    const [orderPending, setOrderpending] = useState([])
    const [orderAccepted, setOrderAccepted] = useState([])



    useEffect(()=>{

      const pending = combineData.filter((item)=>item.orderStatus === "pending")
      setOrderpending(pending)

      const accepted = combineData.filter((item)=>item.orderStatus === "accepted")
      setOrderAccepted(accepted)


    },[])


    const OrderHeadings = ({ heading }) => {

        const defaultHeadings = heading ? heading : 'text'

        return (
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
                <Text>{defaultHeadings}</Text>

            </View>
        )
    }


    const OrderDetailHeading = ({ heading }) => {
        const defaultHeadings = heading ? heading : 'text'

        return (
            <View style={{ width: '100%', height: 30, justifyContent: 'center', backgroundColor: 'grey', paddingLeft: 15 }}>
                <Text style={{ fontSize: 10 }}>{defaultHeadings}</Text>

            </View>
        )
    }


    const OrderButtonPress = (data) => {
    //   const newArray = combineData.map((item)=>{
    //       if(item._id === item._id){
    //           return {...item,active:true}
    //       }
    //       else{
    //           return {...item,active:false}
    //       }
    //   })
    //   setCombineData(newArray)
        setDataShow(data)
    }

    console.log(combineData)



    return (
        <SafeAreaView style={styles.mainContainer} >
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '35%', height: '100%', borderRightWidth: 0.5, borderRightColor: 'lightgrey' }} >
                    <View style={{ width: '100%', height: SH * 0.35, }}>
                        <OrderHeadings heading={'Pending Orders'} />
                        <ScrollView showsVerticalScrollIndicator={false} >
                            {orderPending ?orderPending.map((item, index) => {
                                return (
                                    <OrderNumberButton item={item} onPress={() => OrderButtonPress(item)}  label={item.orderNumber} key={index} />
                                )
                            }):false}

                        </ScrollView>
                    </View>

                    <View style={{ width: '100%', height: SH * 0.75, }}>
                        <OrderHeadings heading={'Accepted Orders'} />
                        <ScrollView showsVerticalScrollIndicator={false} >
                            {orderAccepted?orderAccepted.map((item, index) => {
                                return (
                                    <OrderNumberButton item={item}  key={index} onPress={() => OrderButtonPress(item)} label={item.orderNumber} />
                                )
                            }):false}

                        </ScrollView>
                    </View>
                </View>



                <View style={{ width: '65%', height: '100%' }}>

                    {dataShow && dataShow.orderStatus === "pending"
                        ?
                        <>
                        <View style={styles.viewOne} >
                            <Text style={{ fontSize: 22 }} >{`Order#${dataShow.orderNumber}`}</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <OrderDetailHeading heading={'ORDER DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white' }}>
                                {dataShow.orderDetails.map((item, index) => {
                                    return (
                                        <Text key={index}>
                                            {`${item.dishName} x ${item.qunatity}`}
                                        </Text>
                                    )
                                })}
                            </View>

                            <OrderDetailHeading heading={'ORDER HOTEL DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                <Text style={{ lineHeight: 20 }}>
                                    {dataShow.orderHotelDetails}
                                </Text>
                            </View>


                            <OrderDetailHeading heading={'ORDER USER DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                <Text style={{ lineHeight: 20 }}>
                                   {dataShow.orderUserDetails}
                                </Text>
                            </View>
                        </ScrollView>

                        <View style={styles.btnsView}>
                            <TouchableOpacity style={styles.btnAcceptView} >
                                <Text style={{ color: 'white' }}>Accept</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnDeclineView} >
                                <Text style={{ color: 'white' }}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                        dataShow && dataShow.orderStatus === "accepted" 
                        ?
                        <>
                        <View style={styles.viewOne} >
                            <Text style={{ fontSize: 22 }} >{`Order#${dataShow.orderNumber}`}</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <OrderDetailHeading heading={'ORDER DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white' }}>
                                {dataShow.orderDetails.map((item, index) => {
                                    return (
                                        <Text key={index}>
                                            {`${item.dishName} x ${item.qunatity}`}
                                        </Text>
                                    )
                                })}
                            </View>

                            <OrderDetailHeading heading={'ORDER HOTEL DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                <Text style={{ lineHeight: 20 }}>
                                    {dataShow.orderHotelDetails}
                                </Text>
                            </View>


                            <OrderDetailHeading heading={'ORDER USER DETAILS'} />

                            <View style={{ paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'white', borderBottomColor: 'grey', borderBottomWidth: 0.5 }}>
                                <Text style={{ lineHeight: 20 }}>
                                   {dataShow.orderUserDetails}
                                </Text>
                            </View>
                        </ScrollView>

                    </>             
                        : 
                        <View style={{width:'100%',height:'100%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                            <Text>Check any Order</Text>
                         </View>    
                        }


                </View>

            </View>
        </SafeAreaView>
    )
}

export default JobsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    btnsView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    btnAcceptView: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    btnDeclineView: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    viewOne: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }


})