import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from './colors';
import { IsAndroid, IsDarkTheme } from './phoneSettings';
export const bgColor = () => (IsDarkTheme ? COLORS.darkTheme.background : null);
export const bgColorSecondary = () => (IsDarkTheme ? '#fff' : null);
export const textColor = () => (IsDarkTheme ? COLORS.darkTheme.text.primary : null);
export const textColorSecondary = () => (IsDarkTheme ? COLORS.darkTheme.text.secondary : null);
export const CONSTSTYLES = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: bgColor(),
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: bgColorSecondary(),
    },
    textHeader: {
        color: textColor(),
        fontSize: 24,
        fontFamily: 'Mukta-Regular',
    },
    textSection: {
        color: textColor(),
        fontSize: 22,
        fontFamily: 'Mukta-Regular',
    },
    text: {
        color: textColor(),
        fontSize: 16,
        fontFamily: 'Mukta-Regular',
    },
    textBold: {
        color: textColor(),
        fontSize: 18,
        fontFamily: 'Mukta-Bold',
    },
    textSecondary: {
        color: textColor(),
        fontSize: 14,
        fontFamily: 'Mukta-Light',
    },
});
