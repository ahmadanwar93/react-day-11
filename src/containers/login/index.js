import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {PRIMARY_COLOR, SUB_COLOR, INPUT_STYLE, BUTTON_STYLE} from '../../../assets/styles'

// another method is import * as STYLES from '../../../assets/styles

function Login(props) {
    return (
        <SafeAreaView style ={styles.loginContainer}>
        <Image source ={require("../../../assets/logo4.png")} style={{width: 200, height:200, marginBottom: 20}} />
            <Text style={{marginBottom:20, fontSize:30, fontWeight:'bold',textDecorationLine:'underline'}}>Login</Text>
            <TextInput placeholder='Username' keyboardType='default' style = {styles.inputStyle}/>
            <TextInput placeholder='Password' keyboardType='number-pad' secureTextEntry={true} style = {styles.inputStyle}/>
            {/* keyboardType number pad will force the user to only input number, for example in the application of filling in the phone number, we dont want the user to put in alphabet */}
            {/* <Button title="Login" onPress={() => props.navigation.navigate("Home")}/> */}
            <TouchableOpacity  style = {styles.buttonStyle} onPress={() => props.navigation.navigate("TabNav")}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")} style={styles.buttonStyle}>
            {/* "Register" is the name that we defined inside the navigator */}
                <Text style={{color: PRIMARY_COLOR}}>Register</Text>
                {/* this is how you use the imported primary color */}
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = {
    loginContainer: {
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#dcdcdc"
    },
    
    inputStyle: INPUT_STYLE,
    // another method to use the import, atas nanti macam biasa saja styles.inputStyle
    buttonStyle: BUTTON_STYLE
}


export default Login