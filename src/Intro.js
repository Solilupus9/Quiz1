import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

class  Intro extends Component{
    render(){
        // const {MainStyle,Header,ButtonStyle}=styles;
        return(
            <View style={styles.MainStyle}>
                <Text style={styles.Header}>Test</Text>
                <TouchableOpacity style={styles.ButtonStyle}>
                    <Text>Play Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonStyle}>
                    <Text>Contact Us</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    MainStyle:{
        backgroundColor:'#5018dd',
        flex:1,
    },
    Header:{
        color:'#fffa05',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:40,
        fontFamily:'Roboto',
    },
    ButtonStyle:{
        alignSelf:'center',
        borderWidth:'20%',
        borderColor:'yellow',

    },
});
``
export default Intro;