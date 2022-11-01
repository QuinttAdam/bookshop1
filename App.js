import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.head}>
      <Text style={styles.titel}>Bookshop</Text>

      <View>
        <Image style={styles.icon}
              source={require('./assets/winkelkar.png')}
            />
        <Text>1</Text>
      </View>
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
    justifyContent: 'space-between'
    

  },
  icon: {
    width: 40,
    maxHeight: 40,
  }
});
