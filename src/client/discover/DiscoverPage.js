import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faPlateWheat, faBriefcaseMedical, faBriefcase, faLocationDot, faComputer, faShirt, faPersonRunning, faSeedling, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import Topic from './component/Topic';
import { todo } from '../user/UserPage';
import ToDo from '../user/component/ToDo';

const topic = [faPlateWheat, faBriefcaseMedical, faBriefcase, faLocationDot, faComputer, faSeedling, faShirt, faPersonRunning]

const DiscoverPage = () => {
    const [keySearch, setKeySearch] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <View style={styles.iconSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </View>
                    <TextInput
                        value={keySearch}
                        onChangeText={keySearch => setKeySearch(keySearch)}
                        style={styles.input}
                        placeholder='Tìm kiếm'
                    />
                </View>
                <View style={styles.key}>
                    <Text numberOfLines={1}>abdf, sdvd, vdfv, dfvbd, dfvd, dfvdf, sdsdf, grfgd, zdbjsd, sdjks</Text>
                </View>
                <View style={styles.listTopic}>
                    {topic.map((item, index) => {
                        return (
                            <Topic icon={item} key={index} />
                        )
                    })}
                </View>

            </View>


            <View style={styles.list}>
                {todo.map((item, index) => {
                    return (
                        <View style={styles.item} key={index}>
                            <ToDo title={item.title} view={item.view} rate={item.rate} image={item.image} />
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
        marginRight: 10,
        marginLeft: 10
    },
});