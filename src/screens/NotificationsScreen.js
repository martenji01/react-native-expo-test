import { Button, View } from 'react-native';
function NotificationsScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => {
            navigation.navigate('Settings', {
                itemId: itemId,
                otherParam: otherParam
              })
          }}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default NotificationsScreen;