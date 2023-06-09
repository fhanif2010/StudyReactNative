import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const CallApiVanilaJS = () => {
    useEffect(() => {
        // Sample Call API dengan Metod GET
        // fetch('https://reqres.in/api/users/2')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // Sample Call API dengan Metode POST

            // Data yang akan di Post berupa data object
        //     const dataForAPI = {
        //         name: "morpheus",
        //         job: "leader"
        //     }
        
        //     //contoh data object
        //     console.log('Data Object :',dataForAPI);
            
        //     // contoh data object yang sudah di rubah menjadi stringify
        //     console.log('Data Stringify :', JSON.stringify(dataForAPI))


        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // Data yang akan di upload harus berupa string maka
        //     // Perlu dari data object menjadi Stingify
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => console.log('Post Respon : ',json))

        // Memanggil Data Ketika diClik Button
    }, []);
    
    // Pemanggilan Data API Get
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => setDataUser(json.data))
    }

        // Data Yang Berhasil Di getData dari Api maka harus dibuat state terlebih dahulu
        const [dataUser, setDataUser] = useState({
            avatar: '',
            email: '',
            first_name: '',
            last_name: '',
            url: '',
        })

    // Pemanggilan Data API POST
    const postData = () => {
        const dataPost ={
            name : "morpheus",
        job : "leader", 
        }
        fetch('https://reqres.in/api/users',
        {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataPost)
        })
        .then(response => response.json())
        .then(json => setDataPost(json))
    }

    const [dataPostView, setDataPost] = useState ({
        name : "",
        job : "",
    })

    return (
        <View style={styles.container}>
            <Text style={styles.container.textTitle}>CallApiVanilaJS</Text>
            <Button title='Tampilkan Data' onPress={getData}/>
            <View style={styles.tableData}>
                <Text style={styles.tableData.textTitle}>Respon Tampil Data</Text>
                <View>
                    <View style={styles.tableData.list}>
                        <Text style={{ minWidth: '40%', borderWidth: 1, textAlign: 'center' }}>Nama</Text>
                        <Text style={{ minWidth: '60%', borderWidth: 1, paddingHorizontal: 10}}>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                    </View>
                    <View style={styles.tableData.list}>
                        <Text style={{ minWidth: '40%', borderWidth: 1, textAlign: 'center' }}>Email</Text>
                        <Text style={{ minWidth: '60%', borderWidth: 1, paddingHorizontal: 10}}>{dataUser.email}</Text>
                    </View>
                    <View style={styles.tableData.list}>
                        <Text style={{ minWidth: '40%', borderWidth: 1, textAlign: 'center' }}>Nama</Text>
                        {/* Berikut Merupakan Opsi mengurangi warning karena data belum di panggil */}
                        {dataUser.avatar.length > 0 && (<Image source={{uri:dataUser.avatar}} style={{ width: 100, height: 100}}/>)}
                        
                    </View>
                </View>
            </View>
            <Button title='Uploade Data' onPress={postData} />
            <View>
                <Text>{dataPostView.name}</Text>
                <Text>{dataPostView.job}</Text>
            </View>
        </View>
    )
}

export default CallApiVanilaJS

const styles = StyleSheet.create({
    container: {
        padding: 20,
        textTitle: {
            textAlign: 'center',
            marginBottom: 20
        }
    },
    tableData: {
        borderWidth: 1,
        marginTop: 20,
        textTitle: {
            textAlign: 'center',
            minHeight: 40,
            textAlignVertical: 'center'
        },
        list: {
            flexDirection: 'row'
        }
    }
})