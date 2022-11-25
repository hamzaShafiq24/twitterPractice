import React from 'react'
import CommentSvg from '../Assets/Icons/PostSvgs/commentSvg'
import HeartSvg from '../Assets/Icons/PostSvgs/heartSvg'
import RetweetSvg from '../Assets/Icons/PostSvgs/retweetSvg'
import ShareSvg from '../Assets/Icons/PostSvgs/shareSvg'

export const PostOptions = [
    {
        _id: 0,
        label: 222,
        icon: () => <CommentSvg />,
        noLabel: false,
        onPress: () => false

    },
    {
        _id: 0,
        label: 200,
        icon: () => <RetweetSvg />,
        noLabel: false,
        onPress: () => false

    },
    {
        _id: 0,
        label: 5,
        icon: () => <HeartSvg />,
        noLabel: false,
        onPress: () => false
    },
    {
        _id: 0,
        label: 0,
        icon: () => <ShareSvg />,
        noLabel: true,
        onPress: () => false
    },

]


export const Posts = [
    {
        _id: 0,
        postCreator: {
            name: 'Tabitha Potter Potter',
            picture: {
                url: require('../Assets/Images/imageOne.png')
            },
            isVerified: true,
            userName: 'mis_potter_Potter'
        },
        postCreatedAt: '15h',
        postData: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos ',
            comments: [1, 2, 3],
            retweets: [1, 2, 3, 4, 5],
            hearts: [1, 2, 3, 4, 5, 6, 1, 1, 1, 1],
        },
        postRetweetedBy: {
            name: 'Kieron Dotson'
        }
    },
    {
        _id: 1,
        postCreator: {
            name: 'Martha Craig',
            picture: {
                url: require('../Assets/Images/imageTwo.png')
            },
            isVerified: false,
            userName: 'craig_love'
        },
        postCreatedAt: '15h',
        postData: {
            postText: 'Lorem ipsum dolor sit amet  ',
            comments: [1, 2, 3],
            retweets: [1, 2, 3, 4, 5],
            hearts: [1, 2, 3, 4, 5, 6, 1, 1, 1, 1],
        },
        postRetweetedBy: {
            name: 'Kieron Dotson'
        }
    },
    {
        _id: 2,
        postCreator: {
            name: 'Maximmilian',
            picture: {
                url: require('../Assets/Images/imageThree.png')
            },
            isVerified: false,
            userName: 'maxjacobson'
        },
        postCreatedAt: '3h',
        postData: {
            postText: 'Y’all ready for this next post?',
            comments: [1,],
            retweets: [1, 2,],
            hearts: [1, 2, 3, 4, 5, 6, 1, 1, 1, 1],
        },
        postRetweetedBy: {
            name: 'Kieron Dotson'
        }
    },
    {
        _id: 3,
        postCreator: {
            name: 'karennne',
            picture: {
                url: require('../Assets/Images/imageFour.png')
            },
            isVerified: true,
            userName: 'karennne'
        },
        postCreatedAt: '10h',
        postData: {
            postText: 'Kobe’s passing is really sticking w/ me in a way I didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident. But the end can happen for anyone at any time, & I can’t help but think of anything else lately.',
            comments: [1, 1, 1, 1, 1, 1, 1, 11, 1, 1],
            retweets: [1, 2,],
            hearts: [1, 2, 3, 4, 5, 6, 1, 1, 1, 1],
        },
        postRetweetedBy: {
            name: 'Kieron Dotson'
        }
    }
]





export const ordersData = [
    {
        _id: 0,
        orderNumber: 1,
        orderDetails: [
            {
                _id: 0,
                dishName: 'Chicken Zinger Burger',
                qunatity: 5
            },
            {
                _id: 1,
                dishName: 'Chicken Patty Burger',
                qunatity: 2
            },
            {
                _id: 2,
                dishName: 'Chicken Noodles',
                qunatity: 5
            },
            {
                _id: 3,
                dishName: 'Chicken Burger',
                qunatity: 1
            },

        ],
        orderHotelDetails:'My Restaurant Demo, Washingtion +13000000000',
        orderUserDetails:'M Aqeel Saqib  , House no 222 Block A Washington Hubert Steet Main Crossing',
        orderStatus:'pending',
    },
    {
        _id: 1,
        orderNumber: 2,
        orderDetails: [
            {
                _id: 0,
                dishName: 'Burger',
                qunatity: 1
            },
            {
                _id: 1,
                dishName: 'Fries',
                qunatity: 2
            },
            {
                _id: 2,
                dishName: 'Chicken Noodles',
                qunatity: 5
            },
            {
                _id: 3,
                dishName: 'Pizza',
                qunatity: 1
            },

        ],
        orderHotelDetails:'My Restaurant Demo, Washingtion +13000000000',
        orderUserDetails:'M Aqeel Saqib  , House no 222 Block A Washington Hubert Steet Main Crossing',
        orderStatus:'pending',
    },
    {
        _id: 2,
        orderNumber: 3,
        orderDetails: [
            {
                _id: 0,
                dishName: 'Pasta',
                qunatity: 5
            },
            {
                _id: 1,
                dishName: 'Chicken Patty Burger',
                qunatity: 2
            },
            {
                _id: 2,
                dishName: 'Qorma',
                qunatity: 5
            },
            {
                _id: 3,
                dishName: 'Beef Biryani',
                qunatity: 1
            },

        ],
        orderHotelDetails:'My Restaurant Demo, Washingtion +13000000000',
        orderUserDetails:'M Aqeel Saqib  , House no 222 Block A Washington Hubert Steet Main Crossing',
        orderStatus:'pending',
    },
    {
        _id: 3,
        orderNumber: 4,
        orderDetails: [
            {
                _id: 0,
                dishName: 'Chicken Biryani',
                qunatity: 5
            },
            {
                _id: 1,
                dishName: 'Chicken Patty',
                qunatity: 2
            },
            {
                _id: 2,
                dishName: 'Noodles',
                qunatity: 5
            },
            {
                _id: 3,
                dishName: 'Chicken Burger',
                qunatity: 1
            },

        ],
        orderHotelDetails:'My Restaurant Demo, Washingtion +13000000000',
        orderUserDetails:'M Aqeel Saqib  , House no 222 Block A Washington Hubert Steet Main Crossing',
        orderStatus:'pending',
    },
    {
        _id: 4,
        orderNumber: 1,
        orderDetails: [
            {
                _id: 0,
                dishName: 'Chicken Zinger Burger',
                qunatity: 5
            },
            {
                _id: 1,
                dishName: 'Chicken Patty Burger',
                qunatity: 2
            },
            {
                _id: 2,
                dishName: 'Chicken Noodles',
                qunatity: 5
            },
            {
                _id: 3,
                dishName: 'Chicken Burger',
                qunatity: 1
            },

        ],
        orderHotelDetails:'My Restaurant Demo, Washingtion +13000000000',
        orderUserDetails:'M Aqeel Saqib  , House no 222 Block A Washington Hubert Steet Main Crossing',
        orderStatus:'accepted',
    },

]




export const imageOneCoordinates = [
    {
        top:0,
        right:10,
        left:20,
        bottom:10,
        color:"red",
        onPress:()=>console.log("head")
    },
    {
        top:20,
        right:30,
        left:60,
        bottom:20,
        color:"pink",
        onPress:()=>console.log("foot")
    },
]
