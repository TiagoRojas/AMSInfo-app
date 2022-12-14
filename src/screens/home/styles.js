import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { bgColor } from '../../constants/globalStyles';
import { IsDarkTheme } from '../../constants/phoneSettings';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: bgColor(),
        justifyContent: 'space-between',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    IndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieContainer: {
        width: 120,
        marginHorizontal: 5,
    },
    movieImage: {
        width: 125,
        height: 175,
    },
    topRated: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    topRatedList: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
});
