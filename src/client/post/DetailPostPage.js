import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import ReviewVote from './component/ReviewVote';
import ReviewComment from './component/ReviewComment';
import CreateComment from './component/CreateComment';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function DetailPostPage({route}) {
    const navigation = useNavigation();
	const [image, setImage] = useState(null);
    const [post, setPost] = useState(null);
    const [steps, setSteps] = useState(null);
    const [vote, setVote] = useState(null);
    const [comments, setComments] = useState(null);
    const [newComment, setNewComment] = useState('');

    const {list_id} = route.params;

	var step = [];
    if (steps) {
        for (let i = 0; i < steps.length; i++) {
            step.push(
                <Text style={styles.mainStep} key={i}>
                    {i + 1}. {steps[i].name}: <Text style={styles.desc}>{steps[i].description}</Text>
                </Text>
            )
            if (steps[i].substep) {
                for (let j = 0; j < steps[i].substep.length; j++) {
                    var child = steps[i].child[j];
                    var key = '' + j + i;
                    step.push(
                        <Text style={styles.childStep} key={child.title}>
                            {child.title}: <Text style={styles.desc}>{child.description}</Text>
                        </Text>
                    )
                }
            }
        }
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/list/get_list?id=${list_id}`)
        .then(response => {
            setPost(response.data.result);
        })
        .catch(err => {
            console.log(err);
        });

        axios.get(`http://127.0.0.1:3000/list/get_step?list_id=${list_id}`)
        .then(response => {
            setSteps(response.data.result);
        })
        .catch(err => {
            console.log(err);
        });

        axios.get(`http://127.0.0.1:3000/list/get_vote?list_id=${list_id}`)
        .then(response => {
            if(response.data.result.avg === '') return;
            setVote(response.data.result.avg);
        })
        .catch(err => {
            console.log(err);
        });

        axios.get(`http://127.0.0.1:3000/list/get_comment?list_id=${list_id}`)
        .then(response => {
            if(response.data.result === '') return;
            setComments(response.data.result);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleCreateComment = () => {
        console.log(newComment);
        // axios.post('http://127.0.0.1:3000/list/make_comment/', {newComment, list_id})
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        // setNewComment('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.illustration}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Discover')}>
                    <Ionicons name="ios-arrow-back" size={35} color="white" />
                </TouchableOpacity>
                {post && post.image !== '' ?
                    <Image style={styles.img} source={{ uri: post.image }} /> :
                    <Image style={styles.img} source={require('../../../image/8.jpeg')} /> 
                }
                <View style={styles.download}>
                    <MaterialCommunityIcons name="download" size={35} color="white" />
                </View>
            </View>
			<View style={styles.content}>
                {post && 
                <View>
                    <View style={styles.title}>
                        <Text style={styles.mainTitle}>{post.name}</Text>
                        <Text style={styles.desc}>{post.description}</Text>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.type}>
                            <Text style={styles.type}>L?????t xem: {post.view}</Text>
                            <Text style={styles.type}>L?????t t???i v???: {post.download}</Text>
                            <Text style={styles.type}>????nh gi??: {vote}</Text>
                        </View>
                        <View style={styles.row}>
                            {post.image !== '' ?
                            <Image style={styles.author} source={{ uri: post.image }} /> :
                            <Image style={styles.author} source={require('../../../assets/avatar.png')} /> 
                            }
                            <Text style={styles.desc}>{post.name}</Text>
                        </View>
                    </View>
                </View>
                }
				<View style={styles.step}>
					{step}
				</View>
			</View>

            <View style={styles.space}></View>

            <View style={styles.review}>
                <View style={styles.reviewHeader}>
                    <View>
                        <Text style={styles.reviewHeaderText}>????NH GI?? B??I ????NG</Text>
                        {vote && 
                            <View style={{flexDirection: 'row'}}>
                                <ReviewVote vote={vote} />
                                <Text style={{color: '#ee4d2d'}}>{vote}/5</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.viewAll}>
                        <TouchableOpacity onPress={() => navigation.navigate('Review', {list_id: list_id})}>
                            <Text style={{color: '#ee4d2d'}}>Xem t???t c??? </Text>
                        </TouchableOpacity>
                        <Text><MaterialIcons name="navigate-next" size={20} color="#ee4d2d" /></Text>
                    </View>
                </View>
                <CreateComment newComment={newComment} setNewComment={setNewComment} handleCreateComment={handleCreateComment} />
                {comments && 
                    comments
                        .splice(0, 2)
                        .map((comment, index) => {
                        return (
                            <ReviewComment key={index} comment={comment} vote={vote} />
                        )
                    })
                }
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
	  fontSize: 16,
      backgroundColor: 'white'
    },
	illustration: {
		flex: 1,
		// paddingTop: 30,
	},
	content: {
		flex: 3,
	},
	img: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
		opacity: 0.5,
	},
	title: {
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 20,
	},
	mainTitle: {
		fontSize: 32,
		paddingBottom: 7,
	},
	desc: {
		color: '#909090',
		fontWeight: 'normal',
	},
    download: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#cfcfcf',
        borderRadius: 20
    },
	info: {
		flexDirection: "row",
    	flexWrap: "wrap",
		justifyContent: 'space-between',
		paddingVertical: 10,
		backgroundColor: '#f1f1f1',
		height: 100,
	},
	author: {
		width: 70,
		height: 70,
		borderRadius: 35,	
	},
	type: {
		flex: 2,
		justifyContent: 'center',
        paddingHorizontal: 10,
		fontSize: 15,
		color: '#303030',
	},
	row: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
		borderLeftWidth: 1,
		borderLeftColor: '#959595',
	},
	step: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		paddingHorizontal: 10,
		lineHeight: 18,
	},
	mainStep: {
		fontWeight: 'bold',
		lineHeight: 30,
	},
	childStep: {
		fontWeight: 'bold',
		paddingLeft: 30,
		color: '#000000',
	},
	back: {
		position: 'absolute',
    	left: 5,
    	top: 10,
        backgroundColor: '#cfcfcf',
        borderRadius: 20
	},
    space: {
        width: '100%',
        height: 10,
        backgroundColor: '#f1f1f1'
    },
    review: {
        margin: 10
    },
    reviewHeader: {
        margin: 10,
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewHeaderText: {
        fontWeight: '700',
    },
    viewAll: {
        flexDirection: 'row'
    }
  });
  