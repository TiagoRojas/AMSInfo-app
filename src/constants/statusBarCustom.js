import { StatusBar, SafeAreaView, View } from 'react-native';
import { CONSTSTYLES } from './globalStyles';
import { IsAndroid, IsDarkTheme } from './phoneSettings';

export const CustomStatusBar = ({ children }) =>
    IsAndroid ? (
        <View style={CONSTSTYLES.mainContainer}>
            <StatusBar barStyle={IsDarkTheme ? 'light-content' : 'dark-content'} />
            {children}
        </View>
    ) : (
        <SafeAreaView style={CONSTSTYLES.mainContainer}>{children}</SafeAreaView>
    );
