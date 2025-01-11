// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// React Navigation
import {
  NavigationProp,
  useNavigation
} from '@react-navigation/native'
// Components
import { PrimaryButton } from '../../components'
// Navigation
import { RootStackParams } from '../../routes';
// Theme
import { globalStyles } from '../../theme'


export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globalStyles.container }>
      <Text style={{ color: 'white' }}>HomeScreen</Text>

      <PrimaryButton
        onPress={ () => navigation.navigate( 'Products' ) }
        label='Productos'
      />

      <PrimaryButton
        onPress={ () => navigation.navigate( 'Settings' ) }
        label='Settings'
      />
    </View>
  );
}
