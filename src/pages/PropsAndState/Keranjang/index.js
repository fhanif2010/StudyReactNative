import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Keranjang = (props) => {
  return (
    <View style={{borderWidth: 1, maxWidth: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 80 / 2}}>
      <Text>Items</Text>
      <Text style={{backgroundColor: 'green', padding: 4, borderRadius: 50/2, color: 'white', position: 'absolute', top: 0, right: 0, minWidth: 30, textAlign: 'center'}}>{props.quantity}</Text>
    </View>
  )
}

export default Keranjang

const styles = StyleSheet.create({})