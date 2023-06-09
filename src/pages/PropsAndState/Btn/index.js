import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = (props) => {
  return (
    <View>
      <TouchableOpacity style={{ maxWidth: 150, maxHeight: 90, padding: 10, alignItems: 'center', backgroundColor: 'green', borderRadius: 10}}
      onPress={props.onBtnBuy}
      >
        <Text style={{ color: 'white', fontSize: 20}}>Beli</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({})