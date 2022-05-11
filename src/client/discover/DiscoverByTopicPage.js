import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { post } from '../user/UserPage';
import ToDo from '../user/component/ToDo';
import { IconButton } from 'react-native-paper';
import axios from 'axios';

const DiscoverByTopicPage = () => {
    const postSorted = post.sort(
        function (a, b) {
            if (a.view === b.view) {
                return b.vote - a.vote;
            }
            return a.view < b.view ? 1 : -1;
        });
    const [keySearch, setKeySearch] = useState('');
    const [postFilterByTopic, setPostFilterByTopic] = useState(postSorted);


    
    const handleFilterByTopic = (title) => {
        setPostFilterByTopic(postSorted.filter((item) => item.type.includes(title)));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <View style={styles.back}>
                    <IconButton
                        style={styles.iconBack}
                        icon={() => (
                            <FontAwesomeIcon icon={faArrowLeft} />
                        )}
                    />
                </View>
                <View style={styles.search}>
                    <View style={styles.iconSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </View>
                    <TextInput
                        value={keySearch}
                        onChangeText={(e) => setKeySearch(e)}
                        style={styles.input}
                        placeholder='Tìm kiếm'
                    />
                </View> */}
            </View>


            <View style={styles.list}>
                {postFilterByTopic
                    .filter((item) => item.title.toLowerCase().includes(keySearch.toLowerCase()))
                    .map((item, index) => {
                        return (
                            <View style={styles.item} key={index}>
                                <ToDo title={item.title} view={item.view} vote={item.vote} image={item.image} />
                            </View>
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
    },
    header: {
        flexDirection: 'row',
        alignItems:'center'
    },
    back: {
        padding: 0,
        margin: 0
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 0
    },
    iconSearch: {
        padding: 10
    },
    input: {
        width: 280,
        height: 40,
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