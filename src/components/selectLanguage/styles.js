import { StyleSheet } from 'react-native';
import { bgColor } from '../../constants/globalStyles';

export const styles = StyleSheet.create({
    Option: {
        fontFamily: 'AMSI-Regular',
        fontSize: 16,
    },
    Picker: {
        width: '80%',
    },
    settingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
    },
});
