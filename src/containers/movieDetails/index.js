import React,{useEffect, useState} from 'react'
import {View,Text,TextInput,Button,TouchableOpacity, SafeAreaView, Image, FlatList} from 'react-native'
import {TEXT_STYLE} from '../../../assets/styles'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovieDetails} from '../../actions/index'
import classes from './details.module.css';





function MovieDetails({route}) {

    const dispatch = useDispatch();
    function movieDetails(para){
        console.log(para);
        dispatch(fetchMovieDetails(para))
    }

    const movieSearchDetailsReturn = useSelector((state) => state.movieDetails.data)
    let data = route.params

    useEffect(() => {
        movieDetails(data)
        // console.log(data)
    }, [])

    function _renderItem(item){
        return(
        <View key={data}>
            <Text>{item.Actors}</Text>
        </View>
        )
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

    const DATA = movieSearchDetailsReturn;

    const printMovDetails = () => {console.log(DATA)}

    return (
        <SafeAreaView style={styles.movieDetailsContainer}>
            {/* <Image source ={data.img} style={{width: '40%', height:'40%', }} />
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Title</Text>
            <Text>{data.title}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Plot:</Text>
            <Text style={{width:'80%',textAlign:'justify'}}>{data.plot}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Runtime:</Text>
            <Text>{data.runtime}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Directors:</Text>
            <Text>{data.director}</Text>
            <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Boxoffice:</Text>
            <Text>{data.boxoffice}</Text> */} */}
            {/* <Text>{data}</Text>

            {/* <FlatList
                data = {DATA}
                renderItem = {({item}) => (
                    _renderItem(item)
                )}
                // keyExtractor = {item.id}
                ListEmptyComponent = {() => (
                    _renderEmptyView()
                )}
                
            /> */}
            <div className={classes.detailsContainer}>
                
                <div className={classes.topContainer}>
                    <img src={DATA.Poster} alt="" />
                    <div className={classes.topRightContainer}>
                        <h1 className={classes.titleText}>{DATA.Title}</h1>
                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Date Released </p>
                            <p>{DATA.Released}</p>
                        </div>
                        
                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Runtime</p>
                            <p>{DATA.Runtime}</p>
                        </div>

                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Director</p>
                            <p>{DATA.Director}</p>
                        </div>


                        <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Boxoffice</p>
                            <p>{DATA.BoxOffice}</p>
                        </div>          
                    </div>
                </div>

                <div  className={classes.bottomContainer}>
                    {/* <div className={classes.ratingContainer}>
                        <p className={classes.textlabel}>imdbRating</p>
                        <p>{this.state.data.imdbRating}</p>
                    </div> */}

                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>Plot</p>
                            <p className={classes.text}>{DATA.Plot}</p>
                    </div>

                    
                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>imdbRating</p>
                            <p>{DATA.imdbRating}</p>
                    </div>

                    <div className={classes.smallDetailsContainer}>
                            <p className={classes.textlabel}>imdbVotes</p>
                            <p>{DATA.imdbVotes}</p>
                    </div>
                    
                </div>
                

            </div>

            {/* <Text>{DATA.Title}</Text>
            <Button title='Press here' onPress={() => printMovDetails()}></Button> */}
        </SafeAreaView>
    );
}

// method dia
// function MovieDetails(props) {

//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         console.log(props.route.params.titles.title)
//         setTitle(props.route.params.title)
//     }, [])
//     return (
//         <SafeAreaView style={styles.movieDetailsContainer}>
//             {/* <Image source ={data.img} style={{width: '40%', height:'40%', }} />
//             <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Title</Text>
//             <Text>{data.title}</Text>
//             <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Plot:</Text>
//             <Text style={{width:'80%',textAlign:'justify'}}>{data.plot}</Text>
//             <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Runtime:</Text>
//             <Text>{data.runtime}</Text>
//             <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Directors:</Text>
//             <Text>{data.director}</Text>
//             <Text style={{fontWeight:'bold',textDecorationLine:'underline', marginTop:5}}>Boxoffice:</Text>
//             <Text>{data.boxoffice}</Text> */}
//             <Text>hah</Text>
//         </SafeAreaView>
//     );
// }





const styles = {
    movieDetailsContainer: {
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: TEXT_STYLE,
}



export default MovieDetails