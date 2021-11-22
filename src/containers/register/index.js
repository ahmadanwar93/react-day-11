import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {PRIMARY_COLOR, SUB_COLOR, INPUT_STYLE, BUTTON_STYLE} from '../../../assets/styles'


function Register(){
    return(
        <SafeAreaView style={styles.registerContainer}>
            <Text style={{marginBottom:20, fontSize:30, fontWeight:'bold',textDecorationLine:'underline'}}>Register</Text>
            <TextInput placeholder='Username' keyboardType='default' style= {styles.userInput} />
            <TextInput placeholder='Password' keyboardType='default' style= {styles.userInput}/>
            <TextInput placeholder='Age' keyboardType='number-pad' style= {styles.userInput}/>
            {/* <Button title="Register"/> */}
            <TouchableOpacity style={styles.buttonStyle}>
                <Text>Register</Text>
            </TouchableOpacity>

        </SafeAreaView>

    );
}

const styles = {
    userInput: {
        padding: 15,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        // marginVertical: 20,
        // marginHorizontal: 20
    },
    registerContainer: {
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dcdcdc"
    },
    buttonStyle: BUTTON_STYLE

}



export default Register
