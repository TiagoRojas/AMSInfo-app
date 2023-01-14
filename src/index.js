import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';
import { bgColor } from './constants/globalStyles';
import { Provider } from 'react-redux';
import store from './store';
import { replaceData, init } from './db';
import { getTheme } from './constants/phoneSettings';
init()
    .then(() => replaceData({ language: 'en-EN', theme: getTheme() }))
    .catch((err) => {
        console.log('database error');
        console.log(err);
    });
export default function App() {
    const [loaded] = useFonts({
        'AMSI-Regular': require('../assets/fonts/Mukta-Regular.ttf'),
        'AMSI-Bold': require('../assets/fonts/Mukta-Bold.ttf'),
        'AMSI-Light': require('../assets/fonts/Mukta-Light.ttf'),
    });
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={bgColor} />
            </View>
        );
    } else {
        return (
            <Provider store={store}>
                <AllNavigator />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: COLORS.darkTheme.background,
    },
});
