// React Native
import {
  Pressable,
  Text
} from 'react-native';
// React Navigation
import { useNavigation } from '@react-navigation/native';
// Theme
import { globalStyles } from '../../theme';


interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({
  onPress,
  label
}: Props ) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={ onPress }
      style={ globalStyles.primaryButton }
    >
      <Text style={ globalStyles.buttonText }>{ label }</Text>
    </Pressable>
  );
}
