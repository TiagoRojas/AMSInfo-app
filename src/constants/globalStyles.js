import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchDataBase } from '../db';
import { getTheme } from '../store/selectors/appConfig.selector';
import { COLORS } from './colors';

const hola = () => {
    const data = fetchDataBase().then((res) => {
        res.rows._array[0].theme;
    });
    return data;
};

console.log(hola());

export const test = async () => {
    return 'dark-theme';
};
export const bgColor = async () => {
    return 'dark-theme';
};
export const bgColorSecondary = async () => ((await test()) === 'dark-theme' ? '#fff' : null);
export const textColor = async () => {
    const a = await test();
    return 'dark-theme';
};
export const textColorSecondary = async () => {
    return 'dark-theme';
};
export const UniversalColor = 'dark-theme';

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
