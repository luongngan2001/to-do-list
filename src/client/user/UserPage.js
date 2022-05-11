import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ToDo from './component/ToDo';
import * as ImagePicker from 'expo-image-picker';
import { IconButton } from 'react-native-paper';

export const user = {
  id: '1',
  name: 'Luong Thi Ngan',
  avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg',
  description: 'blalalala blalalala blalalala blalalala blalalala blalalala blalalala blalalala blalalala blalalala blalalala',
  dateCreated: '1/1/2022',
  view: '123456',
  vote: '4.5'
}
export const post = [
  {
    title: "Canh bau tom",
    type: ["Món ăn", "Y tế"],
    execution_time: 20,
    image: "https://i.pinimg.com/474x/6a/8a/93/6a8a93567a289f00b8ed65fd1cfe3bff.jpg",
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    vote: 4.5,
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
    title: "Canh bau ca 1",
    type: ["Món ăn"],
    execution_time: 20,
    image: null,
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    vote: 3.0,
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
    title: "Đi chơi",
    type: ["Du lịch"],
    execution_time: 20,
    image: null,
    description: "Canh bầu tôm tươi là món canh thanh đạm...",
    vote: 2.5,
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
      <View style={styles.account}>
        <View style={styles.title}>
          <View>
            {user.image !== '' ?
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
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style={styles.detail}>
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
        </View>
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
    </View>
  );
}

export default UserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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