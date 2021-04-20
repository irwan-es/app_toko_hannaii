import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {capt, IconPesanan, order, otw, transfer} from '../../assets'

const Notifikasi = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.judul}>Notifikasi</Text>
                <SafeAreaView style={{marginBottom:5}}>
                    <ScrollView >
                        <View style={styles.notif}>
                            <Image source={capt} style={styles.pict}/>
                            <Text >said : "Kueh anu kamari aya keneh ?"</Text>
                        </View>

                        <View style={styles.notif}>
                            <Image source={transfer} style={styles.pict}/>
                            <Text >5 customer sudah transfer</Text>
                        </View>

                        <View style={styles.notif}>
                            <Image source={otw} style={styles.pict}/>
                            <Text >10 pesanan sudah terkirim</Text>
                        </View>

                        <View style={styles.notif}>
                            <Image source={order} style={styles.pict}/>
                            <Text >5 pesanan baru</Text>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            
        </View>
    )
}

export default Notifikasi

const styles = StyleSheet.create({

    container:{
        padding : 15,
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
        flexDirection : 'column',
        flex :1
    },
    notif :{
        flexDirection : 'row',
        flex :1,
        height : 70,
        backgroundColor : '#fbffdf',
        alignItems : 'center'       
        
    },
    pict :{
        width : 50,
        height :50,
        borderRadius : 25,
        marginTop:5,
        marginRight :5
    },
    judul:{
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 20,
        alignItems : 'center',
        marginTop : -15
        
        
    },
})
