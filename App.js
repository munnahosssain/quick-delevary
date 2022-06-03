import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from './src/theme/colors';
import OrderPage from './src/screens/OrderPage';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.purple,
  }
});
