import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from '@expo-google-fonts/inter'
import { View } from 'react-native';
import { theme } from './src/theme';
import HomeScreen from './src/screens';
import Loading from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      {fontsLoaded ? <HomeScreen /> : <Loading /> }
      <StatusBar style="auto" />
    </>
  );
}

