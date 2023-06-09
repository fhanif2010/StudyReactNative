import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'



const StateDinamis = () => {
    const [number, setNumber] = useState(0);
  return (
    <View style={styles.Component}>
      <Text style={styles.Component.Text}>Mteri State Dinamis</Text>
      <Text>{number}</Text>
      <Button title='Tambah Data' onPress={() => setNumber(number + 1)}/>
      <Button title='Reset' onPress={() => setNumber(0)}/>
    </View>
  )
}

export default StateDinamis

const styles = StyleSheet.create({
    Component: {
        padding: 20,
        Text: {
            textAlign: 'center'
        }
    }
})