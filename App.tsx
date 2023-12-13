import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from '@expo-google-fonts/inter'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <View style={styles.container}>
      {fontsLoaded ? <Text>Carregou...</Text> : <ActivityIndicator size={50} /> }
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
