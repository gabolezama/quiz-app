import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <SafeAreaView >
      <View style={{backgroundColor: 'white'}}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
