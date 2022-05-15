import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ToDo from '../user/component/ToDo';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import SearchInput from './component/SearchInput';
import { useNavigation } from '@react-navigation/native';

const DiscoverByTopicPage = ({route}) => {
    const navigation = useNavigation();
    const [post, setPost] = useState(null);
    const [keySearch, setKeySearch] = useState('');
    const {type_id, type_label} = route.params;

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/search/bytype?type_id=${type_id}`)
        .then(response => {
            setPost(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
                    <Ionicons name="arrow-back" size={35} color="#ee4d2d" />
                </TouchableOpacity>
                <SearchInput value={keySearch} setValue={setKeySearch} placeholder={type_label} />
            </View>


            <View style={styles.list}>
                {post && post
                    .map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate('DetailPost', {list_id: item.list_id})}>
                                <ToDo title={item.name} view={item.view} download={item.download} list_id={item.list_id} />
                            </TouchableOpacity>
                        );
                    })}
            </View>
        </View>
    )
}

export default DiscoverByTopicPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        alignItems:'center',
        width: '100%'
    },
    back: {
        padding: 0,
        margin: 0
    },
    listTopic: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10
    },
});