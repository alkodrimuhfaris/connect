import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';
import placeholder from '../assets/photos/profilePlaceholder.png';

const {EXPO_API_URL} = process.env;

export default function BubleChat({item, selfId, colluctorAva}) {
  const {item: chatBuble} = item;
  const {id, sender, chat, createdAt, unread} = chatBuble;

  return selfId === sender ? (
    <View style={buble.parent}>
      <View style={[buble.content, buble.parentSelf]}>
        <View style={[buble.detailWrapper, buble.right]}>
          <Text style={[buble.detail, buble.textRight]}>
            {unread ? null : 'R'}
          </Text>
          <Text style={[buble.detail, buble.textRight]}>
            {moment(createdAt).format('h:mm A')}
          </Text>
        </View>
        <TouchableOpacity style={[buble.chatContainer, buble.containerSelf]}>
          <Text style={[buble.chatTxt, buble.chatTxtSelf]}>{chat}</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={buble.parent}>
      <View style={buble.avaWrapper}>
        <TouchableOpacity
          onPress={() => console.log(EXPO_API_URL + colluctorAva)}>
          <Image
            source={
              colluctorAva ? {uri: EXPO_API_URL + colluctorAva} : placeholder
            }
            style={buble.ava}
          />
        </TouchableOpacity>
      </View>
      <View style={buble.contentColluctor}>
        <TouchableOpacity style={buble.chatContainer}>
          <Text style={buble.chatTxt}>{chat}</Text>
        </TouchableOpacity>
        <View style={[buble.detailWrapper, buble.left]}>
          <Text style={[buble.detail, buble.textLeft]}>
            {moment(createdAt).format('h:mm A')}
          </Text>
        </View>
      </View>
    </View>
  );
}

const buble = StyleSheet.create({
  parent: {
    width: '100%',
    paddingHorizontal: '5%',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: 'green',
  },
  parentSelf: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
  },
  contentColluctor: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
  },
  detailWrapper: {
    width: '20%',
    paddingHorizontal: 5,
  },
  chatWrapper: {
    flex: 1,
    flexWrap: 'wrap',
  },
  chatContainer: {
    flexDirection: 'row',
    width: 'auto',
    maxWidth: '80%',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  containerSelf: {
    backgroundColor: '#56CF75',
  },
  chatTxt: {
    color: '#222',
    fontSize: 14,
  },
  chatTxtSelf: {
    color: 'white',
    fontSize: 14,
  },
  detail: {
    marginVertical: 2,
    fontSize: 11,
    color: '#999',
  },
  avaWrapper: {
    width: 40,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ava: {
    width: 30,
    borderRadius: 30,
    aspectRatio: 1 / 1,
    height: 30,
  },
  right: {
    justifyContent: 'flex-end',
  },
  textRight: {
    textAlign: 'right',
  },
  left: {
    justifyContent: 'flex-start',
  },
  textLeft: {
    textAlign: 'left',
  },
});
