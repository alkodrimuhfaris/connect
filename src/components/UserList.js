import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';
import placeholder from '../assets/photos/profilePlaceholder.png';
const {EXPO_API_URL} = process.env;

export default function UserList({item, searchMode, search}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const selfId = useSelector((state) => state.auth.id);
  const isAdded = useSelector((state) => state.user.isAdded);
  const {item: userData} = item;
  const {id, name, status, phone, ava, FriendDetail: friendArr} = userData;

  React.useEffect(() => {
    if (isAdded) {
      if (searchMode === 0) {
        console.log('search by name');
        dispatch(userAction.getAllUser(token, {search}));
      } else if (searchMode === 1) {
        console.log('search by phone');
        dispatch(userAction.getAllUser(token, {phone: search}));
      } else if (searchMode === 2) {
        console.log('search by phone');
        dispatch(userAction.getAllUser(token, {idName: search}));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdded]);

  const addFriend = () => {
    dispatch(userAction.addFriend(token, id));
  };

  return selfId !== id ? (
    <View style={listStyle.parent}>
      <TouchableOpacity style={listStyle.avaWrapper}>
        <Image
          source={ava ? {uri: EXPO_API_URL + ava} : placeholder}
          style={listStyle.ava}
        />
      </TouchableOpacity>
      <View style={listStyle.nameContainer}>
        <View style={listStyle.nameWrapper}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={listStyle.name}>
            {name ? name : phone}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={listStyle.status}>
            {status}
          </Text>
        </View>
      </View>
      <View style={listStyle.btnWrapper}>
        {!friendArr.length ? (
          <TouchableOpacity onPress={addFriend} style={listStyle.btn}>
            <Text style={listStyle.btnTxt}>Add</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  ) : null;
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
  btnWrapper: {
    width: '20%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#56CF75',
    padding: 10,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
  },
});
