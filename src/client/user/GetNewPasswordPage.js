import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PasswordInput from './component/PasswordInput';

const {width, height} = Dimensions.get('window');

const GetNewPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSunmit = (e) => {
        e.preventDefault();
        // axios.post('http://127.0.0.1:3000/', {email, password})
        // .then(response => {
        //     console.log(response);
        //     setEmail('');
        //     setPassword('');
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="#ee4d2d" />
                <Text style={styles.headerText}>Tạo mật khẩu mới</Text>
            </View>
            <View>
                <PasswordInput password={newPassword} setPassword={setNewPassword} placeholder='Nhập mật khẩu mới' />
                <PasswordInput password={repeatPassword} setPassword={setRepeatPassword} placeholder='Nhập lại mật khẩu' />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSunmit}>
                <Text style={styles.btnText}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetNewPasswordPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        margin: 20
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
})