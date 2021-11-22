import React from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image, FlatList} from 'react-native'
import {PRIMARY_COLOR, SUB_COLOR, INPUT_STYLE, BUTTON_STYLE} from '../../../assets/styles'

const ABOUTDATA = [
    {
        id:0,
        title : "Title One",
        content: 'This is content for section one'
    },
    {
        id:1,
        title : "Title two",
        content: 'This is content for section two'
    },
    {
        id:2,
        title : "Title three",
        content: 'This is content for section three'
    },
    {
        id:3,
        title : "Title four",
        content: 'This is content for section four'
    },
]



function About() {

    function _renderItem(item){
        return(
        <View key = {item.id}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>)
    }

    function _renderEmptyView(){
        return(
            <View style={{
                backgroundColor:'skyblue',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>
                Sorry come back later
            </Text>
            <Text>
                No data yet
            </Text>
            </View>
        )
    }

    return (
        
        <View style={{flex:1}}>
            <Text>This is about</Text>
            <FlatList
                data = {ABOUTDATA}
                renderItem = {({item}) => (
                    _renderItem(item)
                )}
                // keyExtractor = {item.id}
                ListEmptyComponent = {() => (
                    _renderEmptyView()
                )}
                
            />
        </View>

    );
}

const styles = {
    aboutContainer: {
        width: '70%',
        height: 150,
        // backgroundColor: 'lightgray',
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 30
        
    },

    subText: {        
        textAlign: 'justify'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
    }
}

export default About
