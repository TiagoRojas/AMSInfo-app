import { Appearance, Platform } from 'react-native';
export const IsDarkTheme = Appearance.getColorScheme() === 'dark' ? true : false;
export const IsAndroid = Platform.OS === 'android' ? true : false;
export const getThemeDevice = () => {
    const theme = Appearance.getColorScheme();
    if (theme === 'dark') {
        return 'dark-theme';
    } else return 'lightTheme';
};
