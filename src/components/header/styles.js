import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { IsDarkTheme } from '../../constants/phoneSettings';
export const styles = StyleSheet.create({
    searchIcon: {
        width: 40,
        height: 40,
        tintColor: IsDarkTheme ? null : COLORS.darkTheme.primary,
    },
});
