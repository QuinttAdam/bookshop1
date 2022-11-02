import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableNativeFeedback} from 'react-native';


const books= (props) => {
    function handlePress() {
        console.log("Book title 1 read");
      }
      function handlePress2() {
        console.log("Book title 1 pressed");
      }
    
    return(
        <View style={styles.container}>
      <StatusBar style="auto" />

      
      <View style={styles.book}>
        <TouchableNativeFeedback onPress={() => handlePress2()}>
            <Text style={styles.booktitle}>{props.title}<Text style={styles.booktitle}>{props.number}</Text></Text>
        </TouchableNativeFeedback>
        <Text style={styles.auteur}>{props.auteur}</Text>
        <Text>{props.text}
        </Text>
        <View style={styles.code}>
          <Text>{props.isbn}</Text>

          <TouchableNativeFeedback onPress={() => handlePress()}>
            <Text style={styles.button}>{props.read}</Text>
            
          </TouchableNativeFeedback>
          
          
        </View>
        
      </View>
    </View>

        
    )
}


export default books;

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
    book:{
        margin:50,
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
      marginTop: 10,
      display: 'flex',
      flexDirection: "row",
      justifyContent:"space-between",
    },
    button:{
        paddingTop: 5,
        paddingLeft: 5,
        borderRadius: 5,
        borderWidth: 3,
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
      marginTop:0,
    },
    auteur:{
      marginBottom:20,
    }
  });
  