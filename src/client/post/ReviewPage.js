import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ReviewComment from './component/ReviewComment';
import CreateComment from './component/CreateComment';
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ReviewPage = ({route}) => {
    const navigation = useNavigation();
    const {list_id} = route.params;
    const [vote, setVote] = useState(null);
    const [comments, setComments] = useState(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/list/get_vote?list_id=${list_id}`)
        .then(response => {
            setVote(response.data.result.avg);
        })
        .catch(err => {
            console.log(err);
        });

        axios.get(`http://127.0.0.1:3000/list/get_comment?list_id=${list_id}`)
        .then(response => {
            setComments(response.data.result);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleCreateComment = (e) => {
        e.preventDefault();
        console.log(newComment);
        axios.post('http://127.0.0.1:3000/list/make_comment/', {newComment, list_id})
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
        setNewComment('');
    }

    return (
        <View style={styles.review}>
            <View style={styles.reviewHeader}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailPost', {list_id: list_id})}>
                        <Ionicons name="arrow-back" size={24} color="#ee4d2d" />
                    </TouchableOpacity>
                    <Text style={styles.reviewHeaderText}>Đánh giá</Text>
                </View>
            </View>
            <CreateComment newComment={newComment} setNewComment={setNewComment} handleCreateComment={handleCreateComment} />
            {comments && 
                comments
                    .map((comment, index) => {
                    return (
                        <ReviewComment key={index} comment={comment} vote={vote} />
                    )
                })
            }
        </View>
    )
}

export default ReviewPage;

const styles = StyleSheet.create({
    review: {
        margin: 10,
        backgroundColor: 'white'
    },
    reviewHeader: {
        margin: 10,
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewHeaderText: {
        fontSize: 20,
        marginLeft: 10
    },
})