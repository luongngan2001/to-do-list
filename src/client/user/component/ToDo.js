import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

const imageRamdom = [
    require('../../../../image/1.jpeg'),
    require('../../../../image/2.jpeg'),
    require('../../../../image/3.jpeg'),
    require('../../../../image/4.jpeg'),
    require('../../../../image/5.jpeg'),
    require('../../../../image/6.jpeg'),
    require('../../../../image/7.jpeg'),
    require('../../../../image/8.jpeg'),
    require('../../../../image/9.jpeg'),
    require('../../../../image/10.jpeg'),
    require('../../../../image/11.jpeg'),
    require('../../../../image/12.jpeg'),
    require('../../../../image/13.jpeg'),
    require('../../../../image/14.jpeg'),
    require('../../../../image/15.jpeg'),
    require('../../../../image/16.jpeg'),
    require('../../../../image/17.jpeg'),
    require('../../../../image/18.jpeg'),
    require('../../../../image/19.jpeg'),
    require('../../../../image/20.jpeg'),
]

const ToDo = (props) => {
    const { title, view, vote, image } = props;
    const handleNumberView = (number) => {
        if (number < 1000) {
            return number;
        } else if (number < 1000000) {
            return (number / 1000).toFixed(1) + 'K';
        } else {
            return (number / 1000000).toFixed(1) + "Tr";
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={image ? { uri: image } : imageRamdom[Math.floor(Math.random()*20)]} style={styles.image} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
            </View>
            <View style={styles.view}>
                <View style={{ flexDirection: 'row' }}>
                    {/* <FontAwesomeIcon icon={faStar} style={{ color: '#ffce3d' }} /> */}
                    <Text style={{marginLeft: 3}}>{vote}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{color: 'gray'}}>{handleNumberView(view)}</Text>
                    <Text style={{color: 'gray', marginLeft: 3}}>lượt xem</Text>
                </View>

            </View>
        </View>
    );
}

export default ToDo;

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 300,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: 5

    },
    titleText: {
        textAlign: 'center',
        overflow: 'hidden',
        lineHeight: 20,
        height: 40
    },
    view: {
        margin: 5,
        alignItems: 'flex-end'
    },

});