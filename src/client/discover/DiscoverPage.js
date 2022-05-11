import { useState, useEffect } from 'react';
import { Platform, View, Text, StyleSheet, TextInput, Button } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSearch, faPlateWheat, faBriefcaseMedical, faBriefcase, faLocationDot, faComputer, faShirt, faPersonRunning, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Topic from './component/Topic';
import { post } from '../user/UserPage';
import ToDo from '../user/component/ToDo';
import axios from 'axios';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';

const topic = [
    {
        icon: faPlateWheat,
        title: 'Món ăn'
    },
    {
        icon: faBriefcaseMedical,
        title: 'Y tế'
    },
    {
        icon: faBriefcase,
        title: 'Công việc'
    },
    {
        icon: faLocationDot,
        title: 'Du lịch'
    },
    {
        icon: faComputer,
        title: 'Máy tính'
    },
    {
        icon: faSeedling,
        title: 'Cây trồng'
    },
    {
        icon: faShirt,
        title: 'Thời trang'
    },
    {
        icon: faPersonRunning,
        title: 'Thể thao'
    }
]

const DiscoverPage = () => {
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
        // setKeySearch(title);
    }

    // const isFocused = useIsFocused();

    // useEffect(() => {
    //     // Put Your Code Here Which You Want To Refresh or Reload on Coming Back to This Screen.
    // }, [isFocused]);

    // const navigateToNextScreen = () => {

    //     navigation.navigate('Second');

    // }

    return (
        <View style={styles.container}>
            {/* <Button onPress={navigateToNextScreen} title="Navigate To Next Screen" /> */}
            <View style={styles.header}>
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
                </View>
                {/* <View style={styles.key}>
                    <Text numberOfLines={1}>abdf, sdvd, vdfv, dfvbd, dfvd, dfvdf, sdsdf, grfgd, zdbjsd, sdjks</Text>
                </View> */}
                {/* <View style={styles.listTopic}>
                    {topic.map((item, index) => {
                        return (
                            <Topic icon={item.icon} title={item.title} key={index} onPress={() => handleFilterByTopic(item.title)} />
                        )
                    })}
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

export default DiscoverPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#c7ceea',
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10
    },
    iconSearch: {
        padding: 10
    },
    input: {
        width: 300,
        height: 40,
    },
    key: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
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