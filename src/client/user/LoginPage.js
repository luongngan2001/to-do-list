import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Dimensions, TouchableOpacity, } from 'react-native';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSunmit = (e) => {
        // e.preventDefault();
        // axios.post('http://127.0.0.1:3000/', {email, password})
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../../image/logo.png')} />
            </View>
            <View>
                <Text style={styles.title}>To do list</Text>
            </View>
            <View>
                <Text style={styles.header}>Đăng nhập</Text>
            </View>
            <View>
                <TextInput autoComplete='email' style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} />
                <TextInput autoComplete='password' style={styles.input} secureTextEntry={true} placeholder='Mật khẩu' value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSunmit}>
                <Text style={styles.btnText}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Quên mật khẩu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7ceea',
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 16,
        marginBottom: 30
    },
    header: {
        textAlign: 'center',
        color: '#202b4d',
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'white',
        paddingLeft: 20,
        backgroundColor: 'white',
        marginBottom: 20
    },
    btn: {
        width: 350,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#8759d2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 16
    },
    linkText: {
        marginTop: 10,
        textDecorationLine: 'underline',
        color: '#202b4d'
    }
})