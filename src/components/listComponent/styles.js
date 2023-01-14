import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    movieContainer: {
        width: 200,
        height: 275,
        alignItems: 'center',
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    movieImage: {
        width: '70%',
        height: '80%',
        resizeMode: 'contain',
    },
    movieTitle: {
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
    },
});
