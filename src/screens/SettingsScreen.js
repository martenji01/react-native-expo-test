import { Button, View } from 'react-native';
function SettingsScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <h1>{otherParam}</h1>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
export default SettingsScreen;