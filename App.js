import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';

import Books from './components/books';

export default function App() {
  return (
    <ScrollView style={styles.container}>
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
      

      <Books title= "Book title" number="1" auteur="By Some Random dude" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." isbn="ISBN 978-8-2665-1860-1" read= "READ"></Books>
      <Books title= "Book title" number="2" auteur="By Some Other dude" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." isbn="ISBN 123-7-4276-2478-2" read= "READ"></Books>
      <Books title= "Book title" number="3" auteur="By Jane Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." isbn="ISBN 345-6-8461-1684-3" read= "READ"></Books>
      <Books title= "Book title" number="4" auteur="By John Doe" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." isbn="ISBN 567-5-2561-1562-4" read= "READ"></Books>
      <Books title= "Book title" number="5" auteur="By Quinttje Adam" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." isbn="ISBN 895-6-2451-2548-5" read= "READ"></Books>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  
  titel: {
    
    fontSize: 40,
    fontWeight: "bold",
  },
  head: {
    marginTop: 40,
    marginLeft:20,
    marginRight:20,
    marginBottom:50,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  icon: {
    width: 40,
    maxHeight: 40,
    marginTop: 10,
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
    borderBottomWidth: 3,
    borderBottomColor:"Black",
  
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
