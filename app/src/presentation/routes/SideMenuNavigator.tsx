// React Native
import { View } from 'react-native';
// React Navigation
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
// Router
import { StackNavigator } from './';
// Screens
import { ProfileScreen } from '../screens';
// Theme
import { globalColors } from '../theme';


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={ ( props ) => <CustomDrawerContent { ...props } /> }
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="Profile" component={ ProfileScreen } />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent =  ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50
        }}
      />

      <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  );
}
