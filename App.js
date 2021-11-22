import { StatusBar } from 'expo-status-bar';
// from expo
import React from 'react';
// need this because we are using jsx even in react native
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import Login from './src/containers/login';
import Register from './src/containers/register';
// to use navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/containers/home';
import MovieDetails from './src/containers/movieDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './src/containers/about';
import Contact from './src/containers/contact';

// these two are added when we use async storage
import {store, persistor} from './src/store/configureStore';
import { Provider } from 'react-redux';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Tab is just a variable that we define, can put any name we like

function TabNav(){
  return (    
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home'){
          iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
        }else if (route.name === 'About'){
          iconName = focused? 'information-circle-sharp' : 'information-circle-outline'
        }else if (route.name === 'Contact'){
          iconName = focused? 'call-sharp' : 'call-outline'
        }

        return <Ionicons name={iconName} size={20} color={color} />
        // can also return (<view><Ionicons name={iconName} size={20} color={color} /></view>), then can do styling
      },
      tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
    })}>
        <Tab.Screen name="Home" component={Home} options={{
          headerTitle: 'Home Page',
          // tabBarIcon: () => {<Ionicons name="ios-home-outline" size={24} color="black" />}
          }}/>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
      
  )
}

export default function App() {
  return (
    <Provider store = {store} persistor = {persistor}>
    <NavigationContainer >
    {/* style={styles.container} */}
      {/* <Text>Welcome to my app !!!</Text>
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      {/* <Register /> */}
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerRight: null
            
          }} />
          <Stack.Screen name="Register" component={Register} options={{
            title: 'Register Page'
          }}/>
          
          <Stack.Screen name="TabNav" component={TabNav} options={{headerShown:false}}/>
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// StyleSheet.create is redundant because it is just an object, can just omit the stylesheet create and just define the object
