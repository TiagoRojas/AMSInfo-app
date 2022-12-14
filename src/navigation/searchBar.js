import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../screens';

const Stack = createNativeStackNavigator();
const SearchNavigator = () => {
    <Stack.Navigator initialRouteName="SearchBar">
        <Stack.Screen
            name="SearchBar"
            component={Search}
            options={{
                headerShown: true,
                headerTitle: '',
            }}
        />
    </Stack.Navigator>;
};

export default SearchNavigator;
