import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { IsDarkTheme } from '../../constants/phoneSettings';
import { bgColor, textColor } from '../../constants/globalStyles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: bgColor(),
    },
    settingsContainer: {
        flexDirection: 'row',
        backgroundColor: bgColor(),
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    settingsImg: {
        width: 30,
        height: 30,
        tintColor: textColor(),
    },
    settingsBtn: {
        marginHorizontal: 5,
        fontSize: 16,
        color: textColor(),
    },
});
