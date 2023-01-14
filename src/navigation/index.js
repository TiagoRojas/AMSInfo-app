import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app';
const AllNavigator = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default AllNavigator;
