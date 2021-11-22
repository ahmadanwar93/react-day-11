import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {increase, decrease} from '../../actions/index'
import {fetchMovie} from '../../actions/index'
import {useState} from 'react'

function Contact() {
    const count = useSelector((state) => state.count) //map state to props
    const dispatch = useDispatch(); // map dispatch to props


    const [movieName, onChangeMovieName] = useState("Default Movie Name"); //setState

    const printLog = () => {
        // console.log(movieName)
        dispatch(fetchMovie(movieName))
    }

    const movieSearchReturn = useSelector((state) => state.movie.data.Search)

    const printMovie = ()=> {
        console.log(movieSearchReturn[0]);
    }

    return (
        <SafeAreaView>
            <Text>This is contact</Text>
            <Text style = {{textAlign: 'center'}}>Count: {count} </Text>
            <Button title='Increase' onPress= {() => dispatch(increase())}/>
            <Button title='Decrease' onPress= {() => dispatch(decrease())}/>
            {/* aku try below this */}
            <TextInput placeholder='Username' keyboardType='default' onChangeText={onChangeMovieName} value={movieName}/>
            <Button title='Submit' onPress= {()=> printLog()}/>


            <Button title='SearchResult' onPress= {()=> printMovie()}/>
        </SafeAreaView>
    );
}

export default Contact
