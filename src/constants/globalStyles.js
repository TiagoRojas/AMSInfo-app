import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { getTheme } from './phoneSettings';
export const bgColor = () => (getTheme() === 'dark-theme' ? COLORS.darkTheme.background : null);
export const bgColorSecondary = () => (getTheme() === 'dark-theme' ? '#fff' : null);
export const textColor = () => (getTheme() === 'dark-theme' ? COLORS.darkTheme.text.primary : null);
export const textColorSecondary = () =>
    getTheme() === 'dark-theme' ? COLORS.darkTheme.text.secondary : null;
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
        fontFamily: 'AMSI-Regular',
    },
    textSection: {
        color: textColor(),
        fontSize: 22,
        fontFamily: 'AMSI-Regular',
    },
    text: {
        color: textColor(),
        fontSize: 16,
        fontFamily: 'AMSI-Regular',
    },
    textBold: {
        color: textColor(),
        fontSize: 18,
        fontFamily: 'AMSI-Bold',
    },
    textSecondary: {
        color: textColor(),
        fontSize: 14,
        fontFamily: 'AMSI-Light',
    },
});
