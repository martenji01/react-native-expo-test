import { Button, View } from 'react-native';
import FreeComponent from '../components/FreeComponent';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Go to Profile"
        onPress={() => 
          navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />

      <FreeComponent/>
    </View>
  );
}

export default HomeScreen