import { Platform } from 'react-native'


export const Colors = {
  background: "white",
  primary: "black",
  secondary: 'lightgrey',
  skyBluePrimary: '#1d9bf0',
  whitePrimary: '#FFFFFF',
  blackPrimary: '#000000',
  greyPrimary: '#808688',
  greyPrimaryOne: "#d6dad9",
  greyPrimaryTwo: '#687684',
  bottomTabIcon:"black"
};


export const darkModeColors = {
  background: "black",
  primary: "white",
  secondary: 'lightgrey',
  skyBluePrimary: "orange",
  whitePrimary: '#FFFFFF',
  blackPrimary: '#000000',
  greyPrimary: '#808688',
  greyPrimaryOne: "#d6dad9",
  greyPrimaryTwo: '#687684',
  bottomTabIcon:"white"
};

export const Fonts = {
  default: Platform.OS === "ios" ? 'SFProText-Regular' : 'SFProTextRegular',
  bold: Platform.OS === "ios" ? 'SFProText-Bold' : 'SFProTextBold',
  medium: Platform.OS === "ios" ? 'SFProText-Medium' : 'SFProTextMedium',
  semiBold: Platform.OS === "ios" ? 'SFProText-Semibold' : 'SFProTextSemibold',
  light: Platform.OS === "ios" ? 'SFProText-Light' : 'SFProTextLight',
};
