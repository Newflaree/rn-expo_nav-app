// React Navigator
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  HomeScreen,
  ProfileScreen,
  ProductsScreen,
  SettingsScreen
} from '../screens'


const Stack = createStackNavigator();

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
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Profile" component={ ProfileScreen } />
      <Stack.Screen name="Settings" component={ SettingsScreen } />
    </Stack.Navigator>
  );
}
