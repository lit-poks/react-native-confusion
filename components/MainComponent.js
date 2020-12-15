import React, {Component} from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import {View,Platform,Image, StyleSheet,SafeAreaView,ScrollView,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { Icon } from 'react-native-elements';



const Stack=createStackNavigator();

function MenuNavigator({navigation}){
    return(
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerStyle: {backgroundColor: '#512DA8'},headerTintColor: '#fff',headerTitleStyle:{color: '#fff'}}}>
            <Stack.Screen  name="Menu" component={Menu} options={{title:"Menu",headerLeft: ()=>(
                <Icon name='menu' color='white' size={24} onPress={()=>navigation.toggleDrawer()}/>
            )}}/>
            <Stack.Screen options={{title: 'Dish details'}} name="Dishdetail" component={Dishdetail}/>
        </Stack.Navigator>
    );
}

function HomeNavigator({navigation}){
    return(
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#512DA8'},headerTintColor: '#fff',headerTitleStyle:{color: '#fff'}}}>
            <Stack.Screen name="Home" component={Home} options={{
                title:'Home',
                headerLeft: () => (
                    <Icon name='menu' color='white' size={24} onPress={()=>navigation.toggleDrawer()}/>
                )
            }}/>
        </Stack.Navigator>

    );
}

function ContactUs({navigation}){
    return(
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#512DA8'},headerTintColor: '#fff',headerTitleStyle:{color: '#fff'}}}>
            <Stack.Screen name="ContactUs" component={Contact} options={{
                title:'Contact Us',
                headerLeft: () => (
                    <Icon name='menu' color='white' size={24} onPress={()=>navigation.toggleDrawer()}/>
                )
            }}/>
        </Stack.Navigator>
    )
}

function AboutUs({navigation}){
    return(
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#512DA8'},headerTintColor: '#fff',headerTitleStyle:{color: '#fff'}}}>
            <Stack.Screen name="About Us" component={About} options={{
                title:'About Us',
                headerLeft: () => (
                    <Icon name='menu' color='white' size={24} onPress={()=>navigation.toggleDrawer()}/>
                )
            }}
                />
    </Stack.Navigator>
    )
}

const Drawer= createDrawerNavigator();

const CustomDrawerContentComponent= (props)=>(
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex:1}}>
                        <Image source={require('./images/logo.png')}
                            style={styles.drawerImage}/>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.drawerHeaderText}>Restorante Con Fusion</Text>
                    </View>
                </View>
                <DrawerItemList {...props}/>
            </SafeAreaView>
    </ScrollView>
);

function MainNavigator({navigation}){
     return(
         <NavigationContainer>
         <Drawer.Navigator drawerStyle={{backgroundColor: '#D1C4E9'}} drawerContent={props=><CustomDrawerContentComponent {...props}/>}>
             <Drawer.Screen name="HomeNavigator" options={{title: 'Home',drawerLabel:'Home',drawerIcon: ({tintColor})=>(
                 <Icon name='home' type='font-awesome' size={24} color={tintColor}/>
             )}} component={HomeNavigator}/>
             <Drawer.Screen name="MenuNavigator" options={{title: 'Menu',drawerLabel:'Menu',drawerIcon: ({tintColor})=>(
                 <Icon name='list' type='font-awesome' size={24} color={tintColor}/>
             )}} component={MenuNavigator}/>
             <Drawer.Screen name="ContactNavigator" options={{title: 'Contact Us',drawerLabel:'Contact Us',drawerIcon: ({tintColor})=>(
                 <Icon name='info-circle' type='font-awesome' size={24} color={tintColor}/>
             )}} component={ContactUs}/>
             <Drawer.Screen name="AboutNavigator" options={{title: 'About Us',drawerLabel:'About Us',drawerIcon: ({tintColor})=>(
                 <Icon name='address-card' type='font-awesome' size={22} color={tintColor}/>
             )}} component={AboutUs}/>
         </Drawer.Navigator>
         </NavigationContainer>
     )
}



class Main extends Component{

    render(){
        return(
            <View style={{ flex: 1,paddingTop: Platform.OS==='ios'? 0: Expo.Constants.statusBarHeight}}>
            <MainNavigator />
            </View>
        );
    }

}

const styles =StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default Main;