import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, Alert, Modal} from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PasswordInput from './component/PasswordInput';

const {width, height} = Dimensions.get('window');

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleSunmit = useCallback(() => {
        axios.post('http://127.0.0.1:3000/', {email, password})
        .then(response => {
            console.log(response);
            navigation.navigate('Discover');
            setEmail('');
            setPassword('');
        })
        .catch(err => {
            setModalVisible(true);
            console.log(err);
        })
    }, [email. password]);

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../../image/logo.jpg')} />
            </View>
            <View>
                <Text style={styles.header}>Đăng nhập</Text>
            </View>
            <View>
                <View style={styles.inputView}>
                    <TextInput autoComplete='email' require style={styles.input} placeholder='Email' value={email} onChangeText={setEmail} />
                </View>
                <PasswordInput password={password} setPassword={setPassword} placeholder='Mật khẩu' />   
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSunmit}>
                <Text style={styles.btnText}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
            <View style={styles.footer}>
                <View>
                    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.linkText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.linkText}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </TouchableOpacity>
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
                            <Text style={styles.modalText}>Email hoặc mật khẩu của bạn không đúng</Text>
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

export default LoginPage;

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
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
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
    icon: {
        position: 'absolute',
        right: 10
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340
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