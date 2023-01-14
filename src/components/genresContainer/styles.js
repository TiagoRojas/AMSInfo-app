import { StyleSheet } from 'react-native';
import { bgColorSecondary } from '../../constants/globalStyles';

export const styles = StyleSheet.create({
    genreContainer: {
        paddingHorizontal: 5,
    },
    genreText: {
        fontSize: 20,
    },
    genreName: {
        borderWidth: 1,
        borderColor: bgColorSecondary(),
        padding: 5,
    },
    genreFlatList: {
        paddingHorizontal: 5,
    },
});
