import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive} from '../../assets'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
    
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>   
        
        if (label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>
        
        if (label === "Pesanan")  return isFocused ? <IconPesananActive/> : <IconPesanan/>
            
        

        return <IconHome/>
        


    }
    
    return (

        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}  
                 
        >
          {/* <Icon/> */}
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({})
