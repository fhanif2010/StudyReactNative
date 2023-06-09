import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-svg'
import Axios from 'axios'

const ListUser = ({ name, email, phone, address }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ minWidth: '30%', paddingHorizontal: 10 }}>
          <Text>Hello</Text>
          <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={{ width: 50, height: 50, }} />
        </View>
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{phone}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </View>
  )
}

const FakeApi = () => {
  const [name, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAlamat] = useState('')
  const [phone, setTelfon] = useState('')
  const [datauser, setDataUser] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      address,
      phone,
    }
    console.log('data before send : ' + JSON.stringify(data));
    Axios.post('http://10.0.2.2:3000/user', data)
      .then(res => {
        console.log('res :' + res)
      })
      .catch(error => console.log(error));

    // fetch('http://10.0.2.2/user',
    //     {method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    //     })
    //     .then(response => response.data())
    //     .then(data => console.log(data))
  }

  const getData = () => {
    Axios.get('http://10.0.2.2:3000/user')
      .then(data => {
        console.log('data getData:' + JSON.stringify(data.data));
        setDataUser(data.data);
      })
      .catch(error => console.log(error));
  }

 

  return (
    <View style={styles.container}>
      <Text style={styles.container.textHeader}>Aplikasi CRUD Menggunakan Fake API</Text>
      <View style={styles.inputuser}>
        <TextInput placeholder='Nama' value={name} onChangeText={(value) => setNama(value)} style={styles.inputuser.inputText} />
        <TextInput placeholder='Email' value={email} onChangeText={(value) => setEmail(value)} style={styles.inputuser.inputText} keyboardType='email-address' />
        <TextInput placeholder='Alamat' value={address} onChangeText={(value) => setAlamat(value)} style={styles.inputuser.inputText} />
        <TextInput placeholder='No.Telfon' value={phone} onChangeText={(value) => setTelfon(value)} style={styles.inputuser.inputText} keyboardType='number-pad' />
      </View>
      <Button title='Daftarkan' onPress={submit} />
      <Text>hello</Text>

      <View style={{ borderWidth: 1 }}>
        {datauser.map(user => {
          return <ListUser key={user.id} name={user.name} email={user.email} address={user.address} phone={user.phone} />
        })}
      </View>



    </View>
  )
}

export default FakeApi

const styles = StyleSheet.create({
  container: {
    padding: 20,

    textHeader: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 20
    }
  },
  inputuser: {
    marginBottom: 20,
    inputText: {
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 25,
      paddingHorizontal: 20
    }
  }
})