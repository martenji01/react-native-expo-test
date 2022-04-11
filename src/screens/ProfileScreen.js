import { Button, View } from 'react-native';
import MyCamera from '../components/MyCamera';
function ProfileScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Notifications"
          onPress={() => {
            navigation.push('Notifications', {
              itemId: itemId,
              otherParam: otherParam
            })
          }}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <MyCamera/>
      </View>
    );
  }
export default ProfileScreen