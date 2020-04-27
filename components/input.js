import React,{useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}){
    
    const[text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const changer = () =>{
        submitHandler(text);
        setText('');
    };
    
    return(
        
        <View style={{flexDirection:'row'}}>
            <TextInput style={styles.list}
                placeholder="Give me a task!"
                value={text}
                onChangeText={changeHandler}
            />
            <View style={styles.btn}>
                <Button onPress={changer } title='Add me'/>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    btn: {
        padding:15,
    },
    list: {
        width:'65%',
        fontSize: 25,
        color:'black',
        backgroundColor:'white',
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
});