import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { produk1, produk2, produk3, produk4, produk5, produk6 } from '../../assets'


const Katalog = () => {
    return (
        <View style={styles.container}> 
            
            <Text style={styles.judul}>Katalog</Text>
            <SafeAreaView style={{marginBottom:5}}>
            <ScrollView >
            <View style={styles.produk}>
                <View style={styles.listProduk}>
                    <Image source={produk1} style={styles.kue}/>
                        <View style={{flexDirection : 'column'}}>
                            <Text style={styles.font}>Almond Greentea Cookies</Text>
                            <Text>Rp 70.000</Text>
                            <Text>Stok : 5</Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                title = "Ubah harga"
                                />
                                <Button
                                title = "lihat resep"
                                />
                            </View>
                        </View>
                </View>
                
                
            </View>

            <View style={styles.produk}>
                <View style={styles.listProduk}>
                <Image source={produk2} style={styles.kue}/>
                        <View style={{flexDirection : 'column'}}>
                            <Text style={styles.font}>Putri Salju Mete</Text>
                            <Text>Rp 75.000</Text>
                            <Text>Stok : 2</Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                title = "Ubah harga"
                                />
                                <Button
                                title = "lihat resep"
                                />
                            </View>
                        </View>
                </View>
                
                
            </View>

            <View style={styles.produk}>
                <View style={styles.listProduk}>
                <Image source={produk3} style={styles.kue}/>
                        <View style={{flexDirection : 'column'}}>
                            <Text style={styles.font}>Choconut Thumbprint Cookies</Text>
                            <Text>Rp 85.000</Text>
                            <Text>Stok : 6</Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                title = "Ubah harga"
                                />
                                <Button
                                title = "lihat resep"
                                />
                            </View>
                        </View>
                </View>
                
                
            </View>

            <View style={styles.produk}>
                <View style={styles.listProduk}>
                <Image source={produk4} style={styles.kue}/>
                        <View style={{flexDirection : 'column'}}>
                            <Text style={styles.font}>Almond Crescent Cookies</Text>
                            <Text>Rp 85.000</Text>
                            <Text>Stok : 6</Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                title = "Ubah harga"
                                />
                                <Button
                                title = "lihat resep"
                                />
                            </View>
                        </View>
                </View>
                
                
            </View>

            <View style={styles.produk}>
                <View style={styles.listProduk}>
                <Image source={produk5} style={styles.kue}/>
                        <View style={{flexDirection : 'column'}}>
                            <Text style={styles.font}>Triple Choco</Text>
                            <Text>Rp 70.000</Text>
                            <Text>Stok : 10</Text>
                            <View style={{flexDirection:'row'}}>
                                <Button
                                title = "Ubah harga"
                                />
                                <Button
                                title = "lihat resep"
                                />
                            </View>
                        </View>
                </View>
                
                
            </View>

            </ScrollView>
            </SafeAreaView>
            
        </View>
    )
}

export default Katalog

const styles = StyleSheet.create({

    container :{
        backgroundColor : 'white',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 10,
        flex :1,
        marginTop : -40,
        marginBottom : 5
        
    },

    judul:{
        fontFamily : 'TitilliumWeb-Bold',
        fontSize : 20,
        alignItems : 'center',
        
        
    },

    produk:{
        
        flexDirection : 'row',
        marginVertical : 5,
        justifyContent :'space-around',
        
    },

    listProduk:{
        backgroundColor : '#fbffdf',
        flex : 1,
        height : 110,
        marginHorizontal : 5,
        borderRadius : 10,
        flexDirection : 'row',
        
    },

    kue:{
        width : 100,
        height : 100,
        borderRadius : 10,
        marginTop : 5,
        marginLeft : 5,
        marginRight : 5
    },

    font :{
        fontFamily : 'TitilliumWeb-Bold',
        marginTop : 5
    }
})
