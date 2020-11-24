import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import connectLogo from '../assets/logo/connectLogo.png';
import {useNavigation} from '@react-navigation/native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

export default function Header() {
  const navigation = useNavigation();
  const addFriend = () => {
    console.log('add friend');
  };

  const getMyFriend = () => {
    console.log('get my friend');
  };

  const goToSetting = () => {
    navigation.navigate('ProfileStack', {screen: 'Setting'});
  };

  return (
    <View style={headerStyle.parent}>
      <View>
        <Image source={connectLogo} style={headerStyle.image} />
      </View>
      <View style={headerStyle.iconWrapper}>
        <TouchableOpacity onPress={addFriend} style={headerStyle.icon}>
          <Ionicons name="ios-person" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={getMyFriend} style={headerStyle.icon}>
          <Ionicons name="ios-person-add" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSetting} style={headerStyle.icon}>
          <MaterialIcons name="settings" size={22} color="black" />
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
