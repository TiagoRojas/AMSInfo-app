import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';
import { bgColor } from './constants/globalStyles';
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';
import AnimatedSplash from 'react-native-animated-splash-screen';
import { useState } from 'react';

init()
    .then(() => console.log('a'))
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
    const [test, setTest] = useState(false);
    setTimeout(() => {
        setTest(true);
    }, 3000);
    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={test}
            logoImage={require('../assets/arrow.png')}
            backgroundColor={'#121212'}
            logoHeight={150}
            logoWidth={150}>
            <Provider store={store}>
                <AllNavigator />
            </Provider>
        </AnimatedSplash>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: COLORS.darkTheme.background,
    },
});
