import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('You picked Austin!')}
        style={{ backgroundColor: 'green' }}
      >
        <Text style={{ fontSize: 16, color: '#fff' }}>Pick a City</Text>
      </TouchableOpacity>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <Text>Settle Down at Austin</Text>
      <Text>Moving from Outside of United States</Text>
      <Text>Auto Import</Text>
      <Text>* Get CBP approved HS-7 form, make sure they stamp and sign</Text>
      <Text>* Get VIN inspection [More on this]</Text>
      <Text>
        * Get State vehicle safety inspection [More on this, sponsorship link]
      </Text>
      <Text>
        * Go to vehicle registration office, usually texas tax collection county
      </Text>
      <Text>* Wait for title to be mailed</Text>
      <Text>fill</Text>
      <Text>fill</Text>
      <Text>fill</Text>
      <Text>fill</Text>
      <Text>fill</Text>
      <Text>fill</Text>
      <Text>Lease House</Text>
      <StatusBar style='auto' />
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
