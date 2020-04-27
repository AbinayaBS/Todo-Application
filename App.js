import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ToastAndroid, TouchableOpacity, CheckBox, Button, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Display from './components/Display';
import AddTodo from './components/input';
export default function App() {

const[todo,setTodo] = useState([]);

const pressHandler = (id) => {
  setTodo((prevTodo) => {
    return prevTodo.filter(todo => todo.id !=id);
  });
  ToastAndroid.show("Great Job !", ToastAndroid.SHORT);
}

const submitHandler =(text) => {

  if(text.length<1){
    Alert.alert('ALERT!' , 'Task must have some character',[
      {text: 'Got It'}
    ]);
  }
  else{
        setTodo((prevTodo) => {
      return [
        {text:text ,id: Math.random().toString() },
        ...prevTodo
      ]
    })
  }
}
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>

      <View style={styles.container}>
          <Text style={styles.heading}>{"\n\n"}TO DO LIST...📝</Text>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
              <View style={styles.temp}>
              
              <FlatList
                keyExtractor={(item) => item.id}
                data={todo}
                renderItem={({item}) =>(
                  <Display item={item} pressHandler={pressHandler} />
                )}
              />

            </View>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
 
  },
  content: {
    padding:40,
    flex:1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    
  },
  temp: {
    flex:1,
    marginTop: 20,
    
  },
  
});
