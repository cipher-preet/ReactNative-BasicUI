import React, { Component, useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const ColorChanger = () => {

    const [randomBackgroundColor, setRandomBackgroundColor] = useState('#ffffff');

    const generateBackgroundColor = () => {
        const hexRange = "0123456789ABCDEF"

        let Color = "#"

        for (let i = 0; i < 6; i++) {
            Color += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackgroundColor(Color)
    }

    return (
      <>
      <StatusBar backgroundColor={randomBackgroundColor}/>
        <View style={[styles.container, {backgroundColor:randomBackgroundColor}]}>
        <TouchableOpacity onPress={generateBackgroundColor}>
            <View style={styles.actionBtn}>
                <Text style={styles.actionBtnTxts}>Press me</Text>
            </View>
        </TouchableOpacity>
        </View>
      
      </>
    )
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    actionBtn:{
        borderRadius:12,
        backgroundColor:'#6A1B4D',
        paddingHorizontal:10,
        paddingVertical:10,
    },
    actionBtnTxts:{
        fontSize:18,
        color:'#ffffff',
        textTransform:'uppercase',
    }
})

export default ColorChanger
