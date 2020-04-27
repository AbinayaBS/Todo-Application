import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//import { AntDesign } from '@expo/vector-icons';
export default function Display({item, pressHandler}){

    return(
    <TouchableOpacity>
        <View style={styles.disp}>
            <Text style={styles.tex}>{item.text}</Text>
            
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
                {/* <AntDesign style={styles.icon} name="check" size={25} /> */}
                <Icon style={styles.icon} name="check" size={25} />
            </TouchableOpacity>
        
        </View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    disp: {
        flex:1,
        backgroundColor: 'lightgrey',
        padding:10,
        marginTop:5,
        borderWidth:2,
        borderColor:'black',
        borderRadius :5,
        flexDirection:'row',
        width:300,
        justifyContent:'space-between',
    },
    tex:{
        fontSize:20,
    },
    icon:{
        color:'black',
        paddingRight:1,
    }
});