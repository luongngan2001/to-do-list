import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, Alert, Modal } from 'react-native';
import axios from 'axios';
import PasswordInput from './component/PasswordInput';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleSunmit = () => {
        if (password !== repeatPassword) {
            setModalVisible(true);
            return;
        }
        axios.post('http://127.0.0.1:3000/register', {email, name, password})
        .then(response => {
            setEmail('');
            setName('');
            setPassword('');
            setRepeatPassword('');
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../../image/logo.jpg')} />
            </View>
            <View>
                <Text style={styles.header}>Đăng ký</Text>
            </View>
            <View>
                <TextInput autoComplete='email' autoCapitalize="none" style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} autoCapitalize="none" placeholder='Tên' value={name} onChangeText={setName} />
                <PasswordInput password={password} setPassword={setPassword} placeholder='Mật khẩu' />
                <PasswordInput password={repeatPassword} setPassword={setRepeatPassword} placeholder='Nhập lại mật khẩu' />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSunmit}>
                <Text style={styles.btnText}>ĐĂNG KÝ</Text>
            </TouchableOpacity>
            <Text>Bạn đã có tài khoản?  
                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.linkText}> Đăng nhập</Text>
                </TouchableOpacity>
            </Text>

            <View style={styles.centeredView}>
                <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Mật khẩu không khớp</Text>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.buttonModal}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text>Đồng ý</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default RegisterPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 100,
        height: 100
    },
    header: {
        textAlign: 'center',
        color: '#202b4d',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 20
    },
    input: {
        width: 350,
        height: 50,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 20
    },
    btn: {
        width: 350,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#ee4d2d',
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    button: {
    flexDirection: 'row',
    },
    buttonModal: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
    },
    modalText: {
    marginBottom: 15,
    color: 'gray'
    }
})