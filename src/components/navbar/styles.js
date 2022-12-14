import { StyleSheet } from 'react-native';
import { bgColor, textColor } from '../../constants/globalStyles';
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: bgColor(),
    },
    Button: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    Text: {
        fontFamily: 'Mukta-Regular',
        fontSize: 20,
        color: textColor(),
    },
});
