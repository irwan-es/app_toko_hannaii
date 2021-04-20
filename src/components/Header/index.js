import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import {Header_Background, Home_Background, LogoHannaii} from '../../assets/images'

const Header = () => {
    return (
        <View style = {styles.page} >
           
            <ImageBackground source = {Header_Background} style = {styles.header}>
                <Image source = {LogoHannaii} style = {styles.Logo}/>
            </ImageBackground>
            
            
            
            
        
        </View>
    )
}

export default Header

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    page :{
        backgroundColor : 'white',
        
        
    },
    background : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : -100
    },

    header : {
        padding : 60,
        backgroundColor : 'white',
        width : windowWidth * 0.8,
        height : windowHeight * 0.16

    },

    Logo : {
        marginTop : -50,
        marginLeft : -50,
        width : windowWidth * 0.2,
        height : windowHeight * 0.07
    },
})
