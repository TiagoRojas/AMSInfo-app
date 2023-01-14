import { StyleSheet } from 'react-native';
import { bgColorSecondary, textColor } from '../../../constants/globalStyles';
export const styles = StyleSheet.create({
    movieContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    movieInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title: {
        color: textColor(),
        fontFamily: 'AMSI-Regular',
        fontSize: 20,
    },
    poster: {
        height: 200,
        width: 150,
    },
    description: {
        color: textColor(),
        paddingLeft: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: bgColorSecondary(),
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    ratingText: {
        fontSize: 16,
    },
    ratingNum: {
        fontSize: 16,
    },
});
