// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native'
// Components
import { PrimaryButton } from '../../components'
// Theme
import { globalStyles } from '../../theme'


export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
      <Text style={{ color: 'white' }}>HomeScreen</Text>

      <PrimaryButton
        onPress={ () => navigation.navigate( 'Products' as never ) }
        label='Productos'
      />

      <PrimaryButton
        onPress={ () => navigation.navigate( 'Settings' as never ) }
        label='Settings'
      />
    </View>
  );
}
