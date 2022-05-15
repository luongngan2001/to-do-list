import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, Modal, TouchableOpacity } from 'react-native';
import ToDo from './component/ToDo';
import * as ImagePicker from 'expo-image-picker';
import { IconButton } from 'react-native-paper';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import SearchInput from '../discover/component/SearchInput';
import { Menu, MenuItem } from 'react-native-material-menu';

export const post = [
  {
    name: "Canh bau tom",
    type: ["Món ăn", "Y tế"],
    execution_time: 20,
    image: "https://i.pinimg.com/474x/6a/8a/93/6a8a93567a289f00b8ed65fd1cfe3bff.jpg",
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    download:10,
    view: '123',
    author: {
      image: "link2",
      name: "TV. Phương"
    },
    step: [
      {
        title: "Chuẩn bị nguyên liệu",
        description: "Chuản bị nguyên liệu nấu canh",
        time: "",
        child: [
          {
            title: "1 trái bầu",
            description: " Trái bầu còn non,...",
            time: ""
          },
          {
            title: "100g tôm",
            description: "Ưu tiên chọn...",
            time: ""
          },
          {
            title: "Hành ngò",
            description: "",
            time: ""
          },
        ]
      },
      {
        title: "Bầu bỏ cuống, gọt sạch, rửa, cắt thành miếng nhỏ",
        description: "",
        child: []
      }
    ]
  },
  {
    name: "Canh bau ca 1",
    type: ["Món ăn"],
    execution_time: 20,
    image: null,
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    download: 20,
    view: '123212',
    author: {
      image: "link2",
      name: "TV. Phương"
    },
    step: [
      {
        title: "Chuẩn bị nguyên liệu",
        description: "Chuản bị nguyên liệu nấu canh",
        time: "",
        child: [
          {
            title: "1 trái bầu",
            description: " Trái bầu còn non,...",
            time: ""
          },
          {
            title: "100g tôm",
            description: "Ưu tiên chọn...",
            time: ""
          },
          {
            title: "Hành ngò",
            description: "",
            time: ""
          },
        ]
      },
      {
        title: "Bầu bỏ cuống, gọt sạch, rửa, cắt thành miếng nhỏ",
        description: "",
        child: []
      }
    ]
  },
  {
    name: "Đi chơi",
    type: ["Du lịch"],
    execution_time: 20,
    image: null,
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    download: 2,
    view: '12321',
    author: {
      image: "link2",
      name: "TV. Phương"
    },
    step: [
      {
        title: "Chuẩn bị nguyên liệu",
        description: "Chuản bị nguyên liệu nấu canh",
        time: "",
        child: [
          {
            title: "1 trái bầu",
            description: " Trái bầu còn non,...",
            time: ""
          },
          {
            title: "100g tôm",
            description: "Ưu tiên chọn...",
            time: ""
          },
          {
            title: "Hành ngò",
            description: "",
            time: ""
          },
        ]
      },
      {
        title: "Bầu bỏ cuống, gọt sạch, rửa, cắt thành miếng nhỏ",
        description: "",
        child: []
      }
    ]
  },
]

const UserPage = () => {
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);
  const [keySearch, setKeySearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/list/get_author?author_id=2')
    .then(response => {
      setUser(response.data.result);
      console.log(response.data.result);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.title}>
          <View>
            {user && user.image !== null ?
              <Image style={styles.avatar} source={{ uri: user.avatar }} /> :
              <Image style={styles.avatar} source={require('../../../assets/avatar.png')} />
            }
            <IconButton
              icon="camera"
              size={20}
              onPress={pickImage}
              style={styles.camera}
            />
          </View>
          {user && <Text style={styles.name}>{user.name}</Text>}
        </View>
        {/* <View style={styles.detail}>
          <View style={styles.column}>
            <Text style={styles.number}>{handleNumberView(user.view)}</Text>
            <Text style={styles.text}>Lượt xem</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.number}>{user.vote}</Text>
            <Text style={styles.text}>Đánh giá</Text>
          </View>
          <View style={[styles.column, { marginRight: 0 }]}>
            <Text style={styles.number}>{post.length}</Text>
            <Text style={styles.text}>Số bài</Text>
          </View>
        </View> */}
      </View>

      <TouchableOpacity style={styles.logout} onPress={() => setModalVisible(true)}>
        <AntDesign name="logout" size={16} color="black" />
      </TouchableOpacity>
  
      <View style={styles.search}>
        <SearchInput value={keySearch} setValue={setKeySearch} placeholder='Tìm kiếm' />
      </View>
      <View style={styles.list}>
        {post.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <ToDo title={item.title} view={item.view} vote={item.vote} image={item.image} />
            </View>
          );
        })}
      </View>

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Bạn chắc chắn muốn đăng xuất?</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btnNoText}>Không</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonModal}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btnYesText}>Đồng ý</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* <TouchableOpacity
          style={styles.buttonModal}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default UserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white'
  },
  title: {
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  avatarIcon: {
    width: 150,
    height: 150,
    borderRadius: 75,
    fontSize: 50
  },
  camera: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10
  },
  logout: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  detail: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },
  column: {
    alignItems: 'center',
    marginRight: 40
  },
  number: {
    fontWeight: '600',
    fontSize: 20
  },
  text: {
    color: 'gray'
  },
  search: {
    alignItems: 'center'
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    flexDirection: 'row',
  },
  buttonModal: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnYesText: {
    color: '#ee4d2d'
  },
  modalText: {
    marginBottom: 15,
    color: 'gray'
  }

});