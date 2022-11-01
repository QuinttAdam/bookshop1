import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.head}>
      <Text style={styles.titel}>Bookshop</Text>

      <View style={styles.mand}>
        <Image style={styles.icon}
              source={require('./assets/winkelkar.png')}
            />
        <Text style={styles.aantal}>1</Text>
      </View>
      </View>
      
      <View style={styles.book}>
        <Text style={styles.booktitle}>Book title <Text style={styles.booktitle}>1</Text></Text>
        <Text style={styles.auteur}>By Some Random dude</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
        <View style={styles.code}>
          <Text>ISBN 978-8-2665-1860-1</Text>
          <Button title="READ" style={styles.button}/>
          
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titel: {
    
    fontSize: 40,
    fontWeight: "bold",
  },
  head: {
    marginTop: 40,
    
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
    

  },
  icon: {
    width: 40,
    maxHeight: 40,
  },
  mand:{
    display: 'flex',
    flexDirection: "row",
  },
  aantal:{
    fontSize: 20,
    marginTop: 25,
  },
  code:{
    marginTop: 20,
    display: 'flex',
    flexDirection: "row",
    justifyContent:"space-between",
  },
  button:{
    buttonColor:"Black",
    
  },
  book:{
    borderBottomWidth: 3,
    borderBottomColor:"Black",
    paddingRight: 10,
    paddingBottom: 10,
  },
  booktitle:{
    fontSize:30,
    marginTop:40,
  },
  auteur:{
    marginBottom:20,
  }
});
