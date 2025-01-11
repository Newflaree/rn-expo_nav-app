// React
import { useEffect } from 'react';
// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import {
  RouteProp,
  useNavigation,
  useRoute
} from '@react-navigation/native';
// React Navigation
import { RootStackParams } from '../../routes';
// Theme
import { globalStyles } from '../../theme';


export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect( () => {
    navigation.setOptions({
      title: params.name
    })
  }, [] );

  return (
    <View style={ globalStyles.container }>
      <Text>ProductScreen</Text>

      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }}>
        { params.id } - { params.name }
      </Text>
    </View>
  );
}
