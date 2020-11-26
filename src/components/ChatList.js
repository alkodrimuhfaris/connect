import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import placeholder from '../assets/photos/profilePlaceholder.png';

const {EXPO_API_URL} = process.env;

export default function ChatList({item}) {
  const navigation = useNavigation();
  const {item: chatItem} = item;
  let {colluctorProfile, chat, unreadChat, createdAt} = chatItem;

  const {id, name, ava, phone} = colluctorProfile;

  const goToRoomChat = () => {
    console.log(id);
    navigation.navigate('ChatRoom', {id});
  };

  const messageTime = moment(createdAt);

  const yesterday = moment().subtract(1, 'days');

  const lastWeek = moment().subtract(7, 'days');

  let time = moment(createdAt).format('h:mm A');

  if (messageTime.isBefore(yesterday)) {
    time = moment(createdAt).format('dddd');
  } else if (messageTime.isBefore(lastWeek)) {
    time = moment(createdAt).format('MM. DD');
  }

  return (
    <View style={listStyles.parent}>
      <TouchableOpacity onPress={goToRoomChat} style={listStyles.imageWrapper}>
        <Image
          source={ava ? {uri: EXPO_API_URL + ava} : placeholder}
          style={listStyles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToRoomChat}
        style={listStyles.contentWrapper}>
        <View style={listStyles.headerWrapper}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={listStyles.name}>
            {name ? name : phone}
          </Text>
          <Text style={listStyles.time}>{time}</Text>
        </View>

        <View style={listStyles.chatWrapper}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={listStyles.content}>
            {chat}
          </Text>
          {unreadChat ? (
            <View style={listStyles.unreadContainer}>
              <View style={listStyles.unreadWrapper}>
                <Text style={listStyles.unreadTxt}>
                  {unreadChat > 999 ? '999+' : unreadChat}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const listStyles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginVertical: 3,
    width: '100%',
    height: 70,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  image: {
    aspectRatio: 1 / 1,
    borderRadius: 300,
    width: 50,
    height: 50,
  },
  contentWrapper: {
    height: '100%',
    width: '85%',
    justifyContent: 'flex-start',
    paddingLeft: '3%',
    paddingVertical: '2%',
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: '#222',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  chatWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content: {
    fontSize: 14,
    width: '80%',
    color: '#999',
  },
  unreadContainer: {
    width: '20%',
    alignItems: 'flex-end',
  },
  unreadWrapper: {
    backgroundColor: '#56CF75',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  unreadTxt: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
