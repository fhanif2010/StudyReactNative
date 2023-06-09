import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Btn from './Btn'
import Keranjang from './Keranjang'

// Komunikasi Antar Komponen (Mengirim data Antar Komponen)
const PropsAndState = () => {
  const [totalProduk, setTotalProduk] = useState(0)
  return (
    <View style={{borderWidth: 1, height: 200, justifyContent: 'space-evenly'}}>
      <Text style={{textAlign: 'center'}}>index</Text>
      <Btn onBtnBuy={() => setTotalProduk(totalProduk + 1)}/>
      <Keranjang quantity={totalProduk}/>
    </View>
  )
}

export default PropsAndState

const styles = StyleSheet.create({})