import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';
import { bgColor } from './constants/globalStyles';
import { Provider } from 'react-redux';
import store from './store';
export default function App() {
    const [loaded] = useFonts({
        'Mukta-Regular': require('../assets/fonts/Mukta-Regular.ttf'),
        'Mukta-Bold': require('../assets/fonts/Mukta-Bold.ttf'),
        'Mukta-Light': require('../assets/fonts/Mukta-Light.ttf'),
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
