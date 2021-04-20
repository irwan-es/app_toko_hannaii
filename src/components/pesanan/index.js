import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'

const Pesanan = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <Text style={styles.judul}>Pesanan</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.pesananbaru}>
                        <Text style={styles.subjudul}>Baru</Text>
                        <Text style={styles.value}>20</Text>
                    </View>

                    <View style={styles.onProgress}>
                        <Text style={styles.subjudul}>on Progress</Text>
                        <Text style={styles.value}>40</Text>
                    </View>

                    <View style={styles.siapKirim}>
                        <Text style={styles.subjudul}>Siap Kirim</Text>
                        <Text style={styles.value}>15</Text>
                    </View>

                </ScrollView>
                </SafeAreaView>
            
        </View>
    )
}

export default Pesanan

const styles = StyleSheet.create({

    container : {
        padding : 20,
        backgroundColor : 'white',
        marginHorizontal : 15,
        marginTop : 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 10,
        flexDirection: 'row',
    },

    pesananbaru : {
        backgroundColor : '#ffa5a5',
        paddingHorizontal : 70,
        paddingVertical : 40,
        marginTop : 4,
        borderRadius: 10,
        flexDirection : 'row'
              
    },

    judul : {
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 20,
        marginTop : -20,
        marginLeft : -10
    },

    onProgress :{
        backgroundColor : '#ffe683',
        paddingHorizontal : 70,
        paddingVertical : 40,
        marginTop : 4,
        marginLeft : 10,
        borderRadius : 10,
        
    },

    siapKirim : {
        backgroundColor : '#83ff85',
        paddingHorizontal : 70,
        paddingVertical : 40,
        marginTop : 4,
        marginLeft : 10,
        borderRadius :10,
        
    },
    subjudul : {
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 16,
        marginTop : -40,
        marginLeft : -60
    },

    value : {
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 50,
        marginVertical : -30,
        marginHorizontal : -50,
        marginLeft : -20,
        flexDirection : 'row'
    }

})
