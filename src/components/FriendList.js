import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'native-base';
import placeholder from '../assets/photos/profilePlaceholder.png';

const {EXPO_API_URL} = process.env;

export default function FriendList({item, selectedID, setSelectedId}) {
  const {item: friendData} = item;
  const {id, name, status, phone, ava} = friendData.FriendDetail;

  const check = id === selectedID;

  const setSelect = () => {
    if (check) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <TouchableOpacity onPress={setSelect} style={listStyle.parent}>
      <View style={listStyle.avaWrapper}>
        <Image
          source={ava ? {uri: EXPO_API_URL + ava} : placeholder}
          style={listStyle.ava}
        />
      </View>
      <View style={listStyle.nameContainer}>
        <View style={listStyle.nameWrapper}>
          <Text style={listStyle.name}>{name ? name : phone}</Text>
          <Text style={listStyle.status}>{status}</Text>
        </View>
      </View>
      <View style={listStyle.checkbox}>
        <CheckBox onPress={setSelect} color="#56CF75" checked={check} />
      </View>
    </TouchableOpacity>
  );
}

const listStyle = StyleSheet.create({
  parent: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avaWrapper: {
    width: 65,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ava: {
    width: 60,
    aspectRatio: 1 / 1,
    height: 60,
    borderRadius: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'flex-start',
    flexWrap: 'nowrap',
    padding: '5%',
  },
  nameWrapper: {
    width: '80%',
  },
  name: {
    fontSize: 16,
    color: '#222',
  },
  status: {
    fontSize: 12,
    color: '#999',
  },
  checkbox: {
    marginRight: '5%',
  },
});
