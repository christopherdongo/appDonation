import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes'
import { Home } from '../screens/Home/Home';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem'

export type RootStack = {
    Home: undefined,
    SingleDonationItem: undefined,
  };


type SingleDonationItemStack = StackNavigationProp<RootStack, 'SingleDonationItem'>
type HomeItemStack = StackNavigationProp<RootStack, 'Home'>

export type SingleDonationItemProps = {
    navigation: SingleDonationItemStack;
  };

  export type HomeProps = {
    navigation: HomeItemStack;
  };

const Stack = createStackNavigator<RootStack>();

export const MainNavigation =() => {


    return (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{header: () => null, headerShown: false}}
        >
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'SingleDonationItem'} component={SingleDonationItem} />
        </Stack.Navigator>
        </NavigationContainer>
    )

};
