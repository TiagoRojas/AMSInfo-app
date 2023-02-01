import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Anime, SettingsMain, Movies, CardSelected } from '../screens';
import { useTranslation } from 'react-i18next';
import { CustomDrawer } from '../components';
import { textColorSecondary } from '../constants/globalStyles';
import { COLORS } from '../constants/colors';
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const [t, i18n] = useTranslation();
    return (
        <Drawer.Navigator
            backBehavior="history"
            screenOptions={{
                keyboardDismissMode: 'on-drag',
                drawerActiveTintColor: COLORS.darkTheme.active,
                drawerInactiveTintColor: textColorSecondary(),
                drawerActiveBackgroundColor: 'rgba(255,255,255,0)',
                headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerLabel: t('HomeBtn'),
                }}
            />
            <Drawer.Screen
                name="Anime"
                component={Anime}
                options={{ drawerLabel: t('AnimeBtn') }}
            />
            <Drawer.Screen
                name="Movies"
                component={Movies}
                options={{ drawerLabel: t('MovieBtn') }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsMain}
                options={{ drawerItemStyle: { display: 'none' } }}
            />
            <Drawer.Screen
                name="CardSelected"
                component={CardSelected}
                options={{ drawerItemStyle: { display: 'none' } }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
