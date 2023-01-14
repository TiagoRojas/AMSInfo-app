import { StyleSheet } from 'react-native';
import { bgColor, textColor } from '../../constants/globalStyles';
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
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SectionContainer: {
        marginHorizontal: 20,
    },
    SectionTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: textColor(),
    },
    SectionText: {
        fontSize: 32,
    },
    viewMore: {
        fontSize: 16,
    },
    topRatedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
