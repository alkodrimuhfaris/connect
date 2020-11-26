/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Form, Input, Item, Button, CheckBox} from 'native-base';
import {Entypo, EvilIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';
import placeholder from '../assets/photos/profilePlaceholder.png';
import {useNavigation} from '@react-navigation/native';

// "FriendDetail": {
//   "id": 2,
//   "email": null,
//   "name": "Mitsuha Miyamizu",
//   "idName": null,
//   "status": null,
//   "phone": "089633449008",
//   "ava": "Uploads/2-avatar-1606210917539.png",
//   "createdAt": "2020-11-23T09:37:40.000Z",
//   "updatedAt": "2020-11-24T09:41:59.000Z"
// }

const {EXPO_API_URL} = process.env;

function FriendList({item, selectedID, setSelectedId}) {
  const {item: friendData} = item;
  const {id, name, status, phone, ava} = friendData.FriendDetail;

  const check = id === selectedID;

  return (
    <View style={listStyle.parent}>
      <TouchableOpacity style={listStyle.avaWrapper}>
        <Image
          source={ava ? {uri: EXPO_API_URL + ava} : placeholder}
          style={listStyle.ava}
        />
      </TouchableOpacity>
      <View style={listStyle.nameContainer}>
        <View style={listStyle.nameWrapper}>
          <Text style={listStyle.name}>{name ? name : phone}</Text>
          <Text style={listStyle.status}>{status}</Text>
        </View>
      </View>
      <View style={listStyle.checkbox}>
        <CheckBox
          color="#56CF75"
          checked={check}
          onPress={() => setSelectedId(id)}
        />
      </View>
    </View>
  );
}

const listStyle = StyleSheet.create({
  parent: {
    width: '100%',
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avaWrapper: {
    width: 80,
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
    justifyContent: 'center',
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
    marginRight: '10%',
  },
});

export default function ChangeEmail({modalOpen, setModalOpen}) {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const allFriend = useSelector((state) => state.user.allFriend);
  const pageInfo = useSelector((state) => state.user.pageInfoAllFriend);
  const [search, setSearch] = React.useState('');
  const [selectedID, setSelectedId] = React.useState(0);
  const navigation = useNavigation();

  const startChat = () => {
    console.log(selectedID);
    setModalOpen(false);
    navigation.navigate('ChatRoom', {id: selectedID});
  };

  React.useEffect(() => {
    dispatch(userAction.getAllFriend(token, {search}));
  }, [search]);

  React.useEffect(() => {
    console.log(search);
    dispatch(userAction.getAllFriend(token));
  }, []);

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <View style={modalStyle.parent}>
        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTxt}>
            Select Friend To Start Chatting!
          </Text>
        </View>
        <Form style={modalStyle.form}>
          <Item style={search ? modalStyle.itemEnter : null}>
            <EvilIcons name="search" size={24} color="black" />
            <Input
              placeholder="Search Here"
              value={search}
              style={modalStyle.input}
              onChangeText={(e) => setSearch(e)}
            />
            {search ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>
        <View style={modalStyle.friendWrapper}>
          <FlatList
            data={allFriend}
            renderItem={(item) => {
              return (
                <View
                  style={
                    item.index === allFriend.length ? modalStyle.endItem : null
                  }>
                  <FriendList
                    item={item}
                    selectedID={selectedID}
                    setSelectedId={setSelectedId}
                  />
                </View>
              );
            }}
          />
        </View>
        <Button
          style={[
            modalStyle.btn,
            selectedID ? modalStyle.active : modalStyle.inactive,
          ]}
          disabled={!selectedID}
          onPress={startChat}>
          <Text style={modalStyle.btnTxt}>CHAT</Text>
        </Button>
      </View>
    </Modal>
  );
}

const modalStyle = StyleSheet.create({
  form: {
    alignItems: 'center',
    paddingRight: '5%',
    marginVertical: 5,
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  itemEnterError: {
    borderBottomColor: 'red',
  },
  txtWrapper: {
    marginTop: 5,
    width: '100%',
    paddingLeft: '5%',
  },
  txtError: {
    fontSize: 14,
    color: 'red',
  },
  txtCount: {
    fontSize: 14,
    color: '#999',
  },
  parent: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  header: {
    height: '10%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 18,
    color: '#222',
  },
  formWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
  txt: {
    alignItems: 'center',
    fontSize: 14,
    color: '#D2D2D2',
  },
  active: {
    backgroundColor: '#56CF75',
  },
  inactive: {
    backgroundColor: '#999',
  },
  endItem: {
    marginBottom: 30,
  },
  btn: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 0,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});
