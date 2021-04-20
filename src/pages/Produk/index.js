import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Katalog } from '../../components'

const Produk = () => {
    return (
        
        <View style={styles.page}>
            <Header/>
            <Katalog/>
            
        </View>
    )
}

export default Produk

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        flex : 1,
        flexDirection : 'column'
    },
    
})
