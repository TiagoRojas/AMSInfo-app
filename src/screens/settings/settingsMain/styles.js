import { StyleSheet } from 'react-native';
import { bgColor, textColor } from '../../../constants/globalStyles';

export const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor(),
    },
    text: {
        color: textColor(),
    },
});
