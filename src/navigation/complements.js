import { StackActions } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Complements = () => (
    <Stack.Navigator>
        <Stack.Screen name="globalConfig" />
    </Stack.Navigator>
);

export default Complements;
