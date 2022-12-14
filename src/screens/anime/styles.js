import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { bgColor } from '../../constants/globalStyles';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor(),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
