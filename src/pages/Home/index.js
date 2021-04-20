import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header, Notifikasi} from '../../components'
import {Pesanan, Saldo} from '../../components'




const Home = () => {
    return (
        
         <View style = {styles.page} >
           
        
            <Header/>
            <Saldo/>
            <Pesanan />
            <Notifikasi/>
            
            
            
            
        
        </View>
    )
}

export default Home



const styles = StyleSheet.create({
    page :{
        backgroundColor : 'white',
        flex : 1,
        
    },
    

    

})
