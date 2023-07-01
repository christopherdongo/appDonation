import {createStackNavigator} from '@react-navigation/stack'
import { Home } from '../screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';

type RootStack = {
 Home: undefined,
}

const Stack = createStackNavigator<RootStack>();

export const MainNavigation =() => {

    return (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{header: () => null, headerShown: false}}
        >
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
    )

};