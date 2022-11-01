import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.head}>
      <Text style={styles.titel}>Bookshop</Text>
      
      <Text>1</Text>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  titel: {
    
    fontSize: 32,
    fontWeight: "bold",
  },
  head: {
    marginTop: 40,
    margin: 20,
    display: 'flex',
    flexDirection: "row",
    

  }
});
