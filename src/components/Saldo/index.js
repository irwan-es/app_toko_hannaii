import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const Saldo = () => {
    return (
        <View style = {styles.container}>
            <Text style={styles.Text}>Saldo Kas : </Text>
            <Text style={styles.value}>Rp 2.500.000</Text>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        
        backgroundColor : 'white',
        padding: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 10,
        marginTop: -40,
        flexDirection: 'row',
        
    },

    Text : {
        fontFamily : 'TitilliumWeb-Regular',
        fontSize : 18,
        flexDirection : 'row'
    },
    value :{
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 30
    }

})
