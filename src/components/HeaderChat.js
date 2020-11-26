import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import chatAction from '../redux/actions/chat';

export default function Header() {
  const dispatch = useDispatch();
  const {profileColluctor} = useSelector((state) => state.chat);
  const {name, phone} = profileColluctor;

  const goCall = () => {
    console.log('call');
  };

  const getNotes = () => {
    console.log('get my friend');
  };

  const openOption = () => {
    dispatch(chatAction.openOption());
  };

  return (
    <View style={headerStyle.parent}>
      <View style={headerStyle.titleWrapper}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={headerStyle.title}>
          {name ? name : phone}
        </Text>
        <MaterialCommunityIcons
          style={headerStyle.mute}
          name="volume-mute"
          size={24}
          color="#102526"
        />
      </View>
      <View style={headerStyle.iconWrapper}>
        <TouchableOpacity onPress={goCall} style={headerStyle.icon}>
          <FontAwesome name="phone" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={getNotes} style={headerStyle.icon}>
          <Ionicons name="md-list-box" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openOption()} style={headerStyle.icon}>
          <FontAwesome name="ellipsis-v" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  parent: {
    width: '100%',
    height: 45,
    paddingLeft: '5%',
    paddingRight: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  titleWrapper: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: 'auto',
    fontSize: 20,
    color: '#222',
  },
  mute: {
    paddingLeft: 10,
    width: '20%',
  },
  image: {
    aspectRatio: 978 / 150,
    height: '35%',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
