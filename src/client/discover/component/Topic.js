import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { IconButton, Button } from 'react-native-paper';

const Topic = (props) => {
    const { icon, title, onPress } = props;
    return (
        <View style={styles.container}>
            <View style={styles.iconButton}>
                <IconButton
                    onPress={onPress}
                    icon={() => (
                        <FontAwesomeIcon icon={icon} style={styles.icon} />
                    )}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
}

export default Topic;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        width: 90,
        alignItems: 'center'
    },
    iconButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        width: 50,
    },
    icon: {
        padding: 15,
        margin: 7,
    },
    title: {
        overflow: 'hidden',
    }
});