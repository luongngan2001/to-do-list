import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";
import ReviewVote from "./ReviewVote";

const CreateComment = (props) => {
    const [user, setUser] = useState(null);
    const {newComment, setNewComment, handleCreateComment} = props;

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/list/get_author?author_id=2`)
        .then(response => {
          setUser(response.data.result)
        })
        .catch(err => {
          console.log(err);
        })
      }, []);

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#F1F1F1'
                }}
            ></View>

            <View style={styles.comment}>
                <View style={styles.avatar}>
                    {user && user.image !== null ?
                    <Image style={styles.image} source={{ uri: user.avatar }} /> :
                    <Image style={styles.image} source={require('../../../../assets/avatar.png')} />
                    }
                </View>
                <View style={styles.right}>
                    {user && <Text style={{color: 'rgba(0,0,0,.87)', marginBottom: 10}}>{user.name}</Text>}
                    <ReviewVote vote='5' />
                    <TextInput style={styles.input} value={newComment} onChangeText={setNewComment} placeholder="Viết bình luận" />
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.btnCreate}>
                            <Text style={styles.btnCreateText} onPress={handleCreateComment}>Đăng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CreateComment;

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 75
    },
    right: {
        marginLeft: 10
    },
    input: {
        width: 320,
        height: 50,
        marginTop: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#B5B5B5',
        borderRadius: 5,
        backgroundColor: 'white'
    },
    btn: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    btnCreate: {
        backgroundColor: '#ee4d2d',
        width: 60,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnCreateText: {
        color: 'white',
    },
})