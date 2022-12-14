import { Appearance, Platform } from 'react-native';
export const IsDarkTheme = Appearance.getColorScheme() === 'dark' ? true : false;
export const IsAndroid = Platform.OS === 'android' ? true : false;
