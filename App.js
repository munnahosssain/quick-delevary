import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from './src/theme/colors';
import Text from './src/Components/text/text';
import spacing from './src/theme/spacing';
import OrderPage from './src/screens/OrderPage';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{ marginTop: 35 }}
          source={require('./src/svg/images/LOGO.png')}
        />
      <OrderPage />
      </View>
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
