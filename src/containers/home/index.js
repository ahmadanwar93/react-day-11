import React from 'react'
import {View, SafeAreaView, Text,ScrollView, Image, TouchableOpacity, TextInput, Button, FlatList} from 'react-native'
import {TEXT_STYLE,TEXT_STYLE_SUB} from '../../../assets/styles'
import {fetchMovie, fetchMovieDetails} from '../../actions/index'
import {useDispatch, useSelector} from 'react-redux'



// const DATA = [{
//     title: 'Movie 1', plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 1', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 2',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 2', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 3',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov3.jpg'), runtime: '150 minutes', director: 'directors 3', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 4',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov4.jpg'), runtime: '150 minutes', director: 'directors 4', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 5',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov5.jpg'), runtime: '150 minutes', director: 'directors 5', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 6',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov6.jpg'), runtime: '150 minutes', director: 'directors 6', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 7',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov7.jpg'), runtime: '150 minutes', director: 'directors 7', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 8',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov6.jpg'), runtime: '150 minutes', director: 'directors 8', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 9',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov2.jpg'), runtime: '150 minutes', director: 'directors 9', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// },
// {
//     title: 'Movie 10',plot:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pharetra massa. Nulla risus odio, egestas pellentesque neque non, lobortis dictum diam. Mauris nec magna congue, porttitor nibh vel, pretium purus.', img: require('../../../assets/mov3.jpg'), runtime: '150 minutes', director: 'directors 10', boxoffice: '$123456', rating1: '8/10', rating2: '6/10', rating3: '10/10'
// }]

    

function Home(props){

    const [movieName, onChangeMovieName] = React.useState(" "); //setState

    const printLog = () => {
        // console.log(movieName)
        dispatch(fetchMovie(movieName))
    }

    const movieSearchReturn = useSelector((state) => state.movie.data.Search)

    const printMovie = ()=> {
        console.log(movieSearchDetailsReturn);
    }

    const DATA = movieSearchReturn;

    const dispatch = useDispatch();

    const _renderList = (data) => {
        return (
            <View  style={styles.cardStyle}>
                <Text style={styles.textStyle}>{data.Title}</Text>
                {/* onPress={() => props.navigation.navigate("MovieDetails")} */}
                {/* <Text>{data.plot}</Text> */}
                <Image source ={data.Poster} style={{width: 60, height:60, borderRadius: 5}}  />
                {/* <TouchableOpacity onPress={() => props.navigation.navigate("MovieDetails", data)}> */}

                {/* bawah cara Jam */}
                {/* <TouchableOpacity onPress={() => props.navigation.navigate("MovieDetails", {titles: data})}>
                    <Text style = {styles.textStyleSub}>More details here</Text>
                </TouchableOpacity> */}
                
            </View>
        )
    }
    // , alignItems: 'center'

    // const goTwoFunction =() =>{
    //     props.navigation.navigate("MovieDetails")
    // }


    function _renderItem(item){
        return(
        <View key = {item.imdbID}  style={styles.cardStyle}>
            <Text>{item.Title}</Text>
            <Text>{item.Year}</Text>
            <Image source ={item.Poster} style={{width: 60, height:60, borderRadius: 5}}  />
            <TouchableOpacity onPress={() => props.navigation.navigate("MovieDetails", item.imdbID)}>
                    <Text style = {styles.textStyleSub}>More details here</Text>
                </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => movieDetails(item.imdbID)}> */}
            {/* <TouchableOpacity onPress={() => goTwoFunction()}>
                    <Text style = {styles.textStyleSub}>More details here</Text>
                </TouchableOpacity> */}
        </View>
        
        
        // <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between'}}>
        //         <Text>{item.Title}</Text>
        //         <Text>{item.Year}</Text>
        // </ScrollView>        
        )
    }

    function movieDetails(para){
        console.log(para);
        dispatch(fetchMovieDetails(para))
    }

    const movieSearchDetailsReturn = useSelector((state) => state.movieDetails.data)

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
    return(
        <SafeAreaView style={{flex:1}}>

            <TextInput placeholder='Username' keyboardType='default' onChangeText={onChangeMovieName} value={movieName}/>
            <Button title='Submit' onPress= {()=> printLog()}/>


            <Button title='SearchResult' onPress= {()=> printMovie()}/>




            {/* <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between'}}>
                {
                    DATA.map(list => _renderList(list))
                }
            </ScrollView> */}
            <FlatList
                data = {DATA}
                renderItem = {({item}) => (
                    _renderItem(item)
                )}
                // keyExtractor = {item.id}
                ListEmptyComponent = {() => (
                    _renderEmptyView()
                )}
                
            />
        </SafeAreaView>
    )
    
}

const styles = {
    cardStyle: {
        width: 200,
        height: 200,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
        
    },
    textStyle: TEXT_STYLE,
    textStyleSub: TEXT_STYLE_SUB
}

export default Home;