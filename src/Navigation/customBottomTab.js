import React from 'react';
import {View, Platform} from 'react-native';
import AbstractBottomTabButton from '../Components/AbstractComponents/abstractBottomTabButton';
import HomeSvg from '../Assets/Icons/BottomTabSvgs/homeSvg';
import MessagesSvg from '../Assets/Icons/BottomTabSvgs/messageSvg';
import NotificationsSvg from '../Assets/Icons/BottomTabSvgs/notificationsSvg';
import SearchSvg from '../Assets/Icons/BottomTabSvgs/searchSvg';
import { Colors } from '../Theme';
import { useTheme } from '@react-navigation/native';

const CustomBottomTabBar = ({state, descriptors, navigation}) => {

  const { colors } = useTheme();

  return (
    <View
      style={{
        height: 80,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View
        style={{
          flex: 1,
          height: '100%',
          flexDirection: 'row',
          backgroundColor:colors.background,
          zIndex: 1,
          borderTopColor:Colors.greyPrimaryOne,
          borderTopWidth:0.5
        }}
      >
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          switch (route.name) {
            case 'Home':
              return (
                <AbstractBottomTabButton
                  svg={() => <HomeSvg isFocused={isFocused} />}
                  onPress={onPress}
                  key={route.key}
                  isFocused={isFocused}
                />
              );
            case 'Search':
              return (
                <AbstractBottomTabButton
                  svg={() => <SearchSvg isFocused={isFocused} />}
                  onPress={onPress}
                  key={route.key}
                  isFocused={isFocused}
                />
              );
            case 'Notificatons':
              return (
                <AbstractBottomTabButton
                  svg={() => <NotificationsSvg isFocused={isFocused} />}
                  onPress={onPress}
                  key={route.key}
                  isFocused={isFocused}
                />
              );
            case 'Inbox':
              return (
                <AbstractBottomTabButton
                  svg={() => <MessagesSvg isFocused={isFocused} />}
                  onPress={onPress}
                  key={route.key}
                  isFocused={isFocused}
                />
              );
            default:
              return false;
          }
        })}
      </View>
    </View>
  );
};

export default CustomBottomTabBar;