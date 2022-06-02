import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from './src/theme/colors';
import Text from './src/Components/text/text';
import spacing from './src/theme/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ marginTop: 35 }}
          source={require('./src/svg/images/LOGO.png')}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:312,
    backgroundColor: '#A259FF',
  },
});
