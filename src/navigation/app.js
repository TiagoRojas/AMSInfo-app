import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Anime, SettingsMain, Movies } from '../screens';
import { useTranslation } from 'react-i18next';
import { CustomDrawer } from '../components';
import { textColor, textColorSecondary } from '../constants/globalStyles';
import { useDispatch } from 'react-redux';
import { fetchData } from '../store/actions';
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
    const dispatch = useDispatch();
    dispatch(fetchData());
    const [t, i18n] = useTranslation();
    return (
        <Drawer.Navigator
            screenOptions={{
                keyboardDismissMode: 'on-drag',
                drawerActiveTintColor: textColor(),
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
        </Drawer.Navigator>
    );
};

export default AppNavigator;
