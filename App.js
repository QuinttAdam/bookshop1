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
    marginTop: 40,
    margin: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  head: {
    // backgroundColor: "#000",
    // display: 'flex',
    // justifyContent: "space-evenly",
    //hey

  }
});
