import React,{useEffect}  from 'react';
import MainNavigation from './src/Navigation/mainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import JobsScreen from './src/Screens/AppScreens/jobsScreen';
import RNBootSplash from "react-native-bootsplash";
import LoginScreen from './src/Screens/CountryKebabScreens/loginScreen';
import ReactLogoAnimationScreen from './src/Screens/reactLogoAnimationScreen';
import SharedElementStackDemo from './src/Navigation/sharedElementStackDemo';
import SharedElementStackAspect from './src/Navigation/sharedElementStackAspect';
import TodoUseCallbackScreen from './src/Screens/AppScreens/todoUseCallbackScreen';
import 'react-native-reanimated'
import MotiScreen from './src/Screens/AppScreens/motiScreen';
import MainScreenOne from './src/Screens/mainScreenOne';
import SkypeIncomingCallAnimation from './src/Screens/skypeIncomingCallAnimation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ScreenByGraphql from './src/Screens/screenByGraphql';
import MashaimWork from './src/Screens/mashaimWork';
import PanGestureWork from './src/Screens/panGestureWork';
import PanGestureWorkV2 from './src/Screens/panGestureWorkV2';
import ScreenByRelay from './src/Screens/screenByRelay';
import DarkModeScreen from './src/Screens/darkModeScreen';
import PieChartScreen from './src/Screens/pieChartScreen';
import SnapchatFiltersScreen from './src/Screens/snapchatFiltersScreen';
import ChatHeadScreen from './src/Screens/chatHeadScreen';
import TailwindScreen from './src/Screens/tailwindScreen';
import { View,Text } from 'react-native';
import PracticeScreen from './src/Screens/practiceScreen';
import ThirdiSplashScreen from './src/ThirdiSplashScreen';
import MaterialUIScreen from './src/Screens/materialUIScreen';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FirebaseMainNavigation from './src/Screens/FirebasePractice/firebaseMainNavigation';
import {Provider} from 'react-redux';
import store from "./src/Store/index";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});


const App = (props) => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);


  return (
      <GestureHandlerRootView style={{flex: 1}}>
        {/* <ApolloProvider client={client}> */}
        {/* <MainNavigation  /> */}
        {/* <ReactLogoAnimationScreen /> */}
        {/* <SharedElementStackDemo /> */}
        {/* <SharedElementStackAspect /> */}
        {/* <TodoUseCallbackScreen /> */}
        {/* <MotiScreen /> */}
        {/* <MainScreenOne /> */}
        {/* <SkypeIncomingCallAnimation /> */}
        {/* <ScreenByGraphql /> */}
        {/* </ApolloProvider> */}
        {/* <MashaimWork /> */}
        {/* <PanGestureWorkV2 /> */}
        {/* <ScreenByRelay /> */}
        {/* <DarkModeScreen /> */}
        {/* <PieChartScreen /> */}
        {/* <SnapchatFiltersScreen /> */}
        {/* <ChatHeadScreen /> */}
        {/* <TailwindScreen /> */}
        {/* <PracticeScreen /> */}
        {/* <ThirdiSplashScreen /> */}
        {/* <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <MaterialUIScreen />
        </IconComponentProvider> */}
        {/* <FirebaseScreen/> */}
        <Provider store={store}>
        <FirebaseMainNavigation />
        </Provider>
      </GestureHandlerRootView>
  );
};

export default App;