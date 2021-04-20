import React from 'react'
import { useEffect } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import {Logo, SplashBackground, LogoHannaii} from '../../assets'

const Splash = ({navigation}) => {
    useEffect(()=>  {
        setTimeout(() => {
            navigation.replace ('MainApp');
        }, 2000);



    },[navigation])



    return (
        <ImageBackground source={SplashBackground} style={styles.background} >
            <Image source ={LogoHannaii}></Image>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'

    },

    logos : {
        
    }

})
