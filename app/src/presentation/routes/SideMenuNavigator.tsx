// React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
// Router
import { StackNavigator } from './';
// Screens
import { ProfileScreen } from '../screens';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="Profile" component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}
