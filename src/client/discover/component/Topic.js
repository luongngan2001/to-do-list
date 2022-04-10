import {View, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Topic = (props) => {
    const {icon} = props;
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={icon} style={styles.icon}/>
        </View>
    );
}

export default Topic;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 22,
    },
    icon: {
        padding: 15,
        margin: 7
    }
});