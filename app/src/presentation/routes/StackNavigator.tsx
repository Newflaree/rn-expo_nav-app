// React Navigator
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  HomeScreen,
  ProfileScreen,
  ProductScreen,
  ProductsScreen,
  SettingsScreen
} from '../screens'


export type RootStackParams = {
  Home: undefined,
  Product: { id: number, name: string },
  Products: undefined,
  Settings: undefined,
  Profile: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Profile" component={ ProfileScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
    </Stack.Navigator>
  );
}
