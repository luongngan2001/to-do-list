import { useState, useEffect } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Topic from './component/Topic';
import ToDo from '../user/component/ToDo';
import axios from 'axios';
import SearchInput from './component/SearchInput';
import { useNavigation } from '@react-navigation/native';

const topic = [
    {
        id: 1,
        icon: 'food-bank',
        color: '#8f60bf',
        name: 'food',
        label: 'Món ăn'
    },
    {
        id: 2,
        icon: 'medical-services',
        color: '#f291a3',
        name: 'medical',
        label: 'Y tế'
    },
    {
        id: 3,
        icon: 'airplanemode-active',
        color: '#079dd9',
        name: 'travel',
        label: 'Du lịch'
    },
    {
        id: 4,
        icon: 'computer',
        color: 'gray',
        name: 'computer',
        label: 'Điện tư'
    },
    {
        id: 5,
        icon: 'nature',
        color: '#56c596',
        name: 'nature',
        label: 'Nông nghiệp'
    },
    {
        id: 6,
        icon: 'style',
        color: '#f56a79',
        name: 'style',
        label: 'Sắc đẹp'
    },
    {
        id: 7,
        icon: 'sports-football',
        color: 'orange',
        name: 'activity',
        label: 'Thể thao'
    },
    {
        id: 8,
        icon: 'work',
        color: '#425d8a',
        name: 'work',
        label: 'Công việc'
    },
]

const DiscoverPage = () => {
    const [keySearch, setKeySearch] = useState('');
    const [post, setPost] = useState(null);

    const navigation = useNavigation();
    // useEffect(() => {
    //     // axios.get('http://127.0.0.1:3000/search/type')
    //     // .then(response => {
    //     //     setTopicList(response.data);
    //     // })
    //     // .catch(err => {
    //     //     console.log(err);
    //     // })
    // }, []);

    // const postSorted = post && post.sort(
    //     function (a, b) {
    //         if (a.view === b.view) {
    //             return b.vote - a.vote;
    //         }
    //         return a.view < b.view ? 1 : -1;
    //     });

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/search/getall`)
        .then(response => {
            setPost(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleSearch = () => {
        axios.get(`http://127.0.0.1:3000/search?key=${keySearch}`)
        .then(response => {
            setPost(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        handleSearch(keySearch);
    }, [keySearch])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchInput value={keySearch} setValue={setKeySearch} placeholder='Tìm kiếm' />
                <View style={styles.listTopic}>
                    {topic.map((item, index) => {
                        return (
                            <Topic icon={item.icon} color={item.color} name={item.name} label={item.label} key={index} onPress={() => navigation.navigate('DiscoverByTopic', {type_id: item.id, type_label: item.label})} />
                        )
                    })}
                </View>
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

export default DiscoverPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: '#ee4d2d',
        alignItems: 'center'
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
        ...Platform.select({
            ios: {
                marginRight: 10,
                marginLeft: 10
            },
            android: {
                marginRight: 20,
                marginLeft: 20
            }
        }),

    },
});