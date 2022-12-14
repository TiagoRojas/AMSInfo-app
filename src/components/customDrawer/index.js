import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { IsDarkTheme } from '../../constants/phoneSettings';
import { COLORS } from '../../constants/colors';
const CustomDrawer = (props) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <View></View>
            <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Settings')}
                style={styles.settingsContainer}
                activeOpacity={0.7}
                underlayColor={COLORS.darkTheme.primary}>
                {IsDarkTheme ? (
                    <AntDesign name="setting" size={24} color={'white'} />
                ) : (
                    <AntDesign name="setting" size={24} color={'black'} />
                )}
                <Text style={styles.settingsBtn}>{t('SettingsBtn')}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default CustomDrawer;

{
    /* <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: t('SettingsBtn'),
                    drawerIcon: ({ focused }) =>
                        IsDarkTheme ? (
                            <AntDesign
                                name="setting"
                                size={24}
                                color={focused ? '#7cc' : 'white'}
                            />
                        ) : (
                            <AntDesign
                                name="setting"
                                size={24}
                                color={focused ? '#7cc' : 'black'}
                            />
                        ),
                }}
            /> */
}
