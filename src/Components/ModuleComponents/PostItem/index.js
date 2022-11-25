import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import VerifiedProfileSvg from '../../../Assets/Icons/PostSvgs/verifiedProfileSvg'
import ArrowDownSvg from '../../../Assets/Icons/CommonSvgs/arrowDownSvg'
import { Colors, Fonts } from '../../../Theme'
import { moderateScale } from 'react-native-size-matters'
import CommentSvg from '../../../Assets/Icons/PostSvgs/commentSvg'
import HeartSvg from '../../../Assets/Icons/PostSvgs/heartSvg'
import RetweetSvg from '../../../Assets/Icons/PostSvgs/retweetSvg'
import ShareSvg from '../../../Assets/Icons/PostSvgs/shareSvg'
import { PostOptions } from '../../../Utils/mocData'
import OptionsButton from './optionsButton'
import { useTheme } from '@react-navigation/native'


const PostItem = ({ item }) => {

    const [showMore, setShowMore] = useState(false)
    const [heart, setHeart] = useState(false) 
    const { colors } = useTheme();

    const heartLike = () => {
        setHeart((prev) => !prev)
    }

    const onShow = () => {
        setShowMore((prev) => !prev)
    }

    return (
        <View style={styles.mainConatiner} >
            <View style={styles.viewOne}>
                <View style={styles.viewOneA}>
                    <RetweetSvg />
                </View>
                <View style={styles.viewOneB}>
                    <Text style={styles.textOne}>{`${item.postRetweetedBy.name} Retweeted`}</Text>
                </View>
            </View>


            <View style={styles.viewTwo}>

                <View style={styles.viewTwoA}>
                    <View style={styles.profileIconView}>
                        <Image source={item.postCreator.picture.url} style={{ width: 55, height: 55, borderRadius: 55 }} />
                    </View>
                </View>
                <View style={styles.viewTwoB}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ marginRight: 5 }}>
                            <Text style={[styles.textTwo,{color:colors.primary}]}>{((item.postCreator.name).length > 15) ?
                                (((item.postCreator.name).substring(0, 15 - 3)) + '...') :
                                item.postCreator.name}
                            </Text>
                            {/* <Text style={styles.textTwo}>{item.postCreator.name}</Text> */}
                        </View>

                        {item.postCreator.isVerified ?
                            <View >
                                <VerifiedProfileSvg />
                            </View>
                            : false}

                        <View style={{ marginLeft: 5,flexDirection:'row',alignItems:'center' }}>
                        <Text style={[styles.textThree,{color:colors.primary}]}>{((item.postCreator.userName).length > 10) ?
                                `@${(item.postCreator.userName).substring(0, 10 - 3)}...` :
                                `@${item.postCreator.userName}`
                                }
                            </Text>
                            <Text  style={styles.textThree}>
                                {` .${item.postCreatedAt}`}
                            </Text>
                            {/* <Text style={styles.textThree}>{`@${item.postCreator.userName} ·${item.postCreatedAt}`}</Text> */}
                        </View>

                        <TouchableOpacity
                            onPress={onShow}
                            style={{ position: 'absolute', right: 5,padding:5 }}>
                            <ArrowDownSvg />
                        </TouchableOpacity>
                    </View>



                    <View style={{ paddingVertical: 3 }}>
                        <Text numberOfLines={showMore ? undefined : 5} style={[styles.textFour,{color:colors.primary}]}>{item.postData.postText}</Text>
                    </View>

                    <View style={{ width: 250, height: 30, flexDirection: 'row' }}>

                        <OptionsButton
                            icon={() => <CommentSvg />}
                            label={item.postData.comments.length}
                        />

                        <OptionsButton
                            icon={() => <RetweetSvg />}
                            label={item.postData.retweets.length}
                        />

                        <OptionsButton
                            icon={() => <HeartSvg heart={heart} />}
                            label={item.postData.hearts.length}
                            onPress={heartLike}
                        />

                        <OptionsButton
                            icon={() => <ShareSvg />}
                            noLabel={true}
                        />
                    </View>

                </View>

            </View>
        </View>
    )
}

export default PostItem

const styles = StyleSheet.create({
    mainConatiner: {
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.greyPrimaryOne,
        paddingVertical: 5
    },
    viewOne: {
        width: '100%',
        height: 20,
        // backgroundColor: 'red',
        flexDirection: 'row'
    },
    viewOneA: {
        width: "20%",
        height: '100%',
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 5
    },
    viewOneB: {
        width: "80%",
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 5
    },
    textOne: {
        fontSize: moderateScale(13, 0.1),
        fontFamily: Fonts.default,
        color: Colors.greyPrimaryTwo
    },
    viewTwo: {
        width: '100%',
        // backgroundColor: 'orange',
        flexDirection: 'row'
    },
    viewTwoA: {
        width: "20%",
        height: '100%',
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        paddingRight: 5
    },
    viewTwoB: {
        width: "80%",
        height: '100%',
        paddingLeft: 5
    },
    profileIconView: {
        width: 55,
        height: 55,
        borderRadius: 55,
        backgroundColor: 'black',
    },
    textTwo: {
        fontSize: moderateScale(16, 0.1),
        fontFamily: Fonts.bold,
        color: Colors.blackPrimary
    },
    textThree: {
        fontSize: moderateScale(15, 0.1),
        fontFamily: Fonts.default,
        color: Colors.greyPrimaryTwo
    },

    textFour: {
        fontSize: moderateScale(15, 0.1),
        fontFamily: Fonts.default,
        color: Colors.blackPrimary
    },
    textFive: {
        fontSize: moderateScale(12, 0.1),
        fontFamily: Fonts.default,
        color: Colors.greyPrimaryTwo
    },

})

