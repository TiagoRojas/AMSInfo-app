import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { bgColor, textColor } from '../../constants/globalStyles';

export const styles = StyleSheet.create({
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
