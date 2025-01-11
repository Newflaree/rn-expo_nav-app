// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import {
  StackActions,
  useNavigation
} from '@react-navigation/native';
// Components
import { PrimaryButton } from '../../components';
// Theme
import { globalStyles } from '../../theme';


export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
      <Text style={{ marginBottom: 10 }}>Settings Screen</Text>

      <PrimaryButton
        label='Regresar'
        onPress={ () => navigation.goBack() }
      />

      <PrimaryButton
        label='Regresar al Home'
        onPress={ () => navigation.dispatch( StackActions.popToTop() ) }
      />
    </View>
  );
}
