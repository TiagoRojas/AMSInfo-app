import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { MovieSelected } from '../screens';
import { getSelectedMovie } from '../store/selectors';

const Stack = createStackNavigator();

const Complements = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MovieSelected" component={MovieSelected} />
        </Stack.Navigator>
    );
};
export default Complements;
// screenOptions={{ headerShown: false }}
