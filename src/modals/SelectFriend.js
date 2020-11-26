/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Form, Input, Item, Button} from 'native-base';
import {Entypo, EvilIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';
import {useNavigation} from '@react-navigation/native';
import FriendList from '../components/FriendList';

export default function SelectFriend({modalOpen, setModalOpen}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);
  const allFriend = useSelector((state) => state.user.allFriend);
  const pageInfo = useSelector((state) => state.user.pageInfoAllFriend);
  const [search, setSearch] = React.useState('');
  const [selectedID, setSelectedId] = React.useState(0);
  const [refresh, setRefresh] = React.useState(false);

  const startChat = () => {
    console.log(selectedID);
    setModalOpen(false);
    navigation.navigate('ChatRoom', {id: selectedID});
    setSelectedId(0);
  };

  React.useEffect(() => {
    dispatch(userAction.getAllFriend(token, {search}));
  }, [search]);

  React.useEffect(() => {
    console.log(search);
    dispatch(userAction.getAllFriend(token));
  }, []);

  const nextPage = () => {
    if (pageInfo.pages > pageInfo.currentPage) {
      dispatch(
        userAction.scrollAllFriend(token, pageInfo.currentPage + 1, {search}),
      );
    }
  };

  const doRefresh = () => {
    setRefresh(true);
    dispatch(userAction.getAllFriend(token, {search}));
    setRefresh(false);
  };

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
            onEndReached={nextPage}
            onEndReachedThreshold={0.5}
            onRefresh={doRefresh}
            refreshing={refresh}
            data={allFriend}
            renderItem={(item) => {
              return (
                <View
                  style={
                    item.index === allFriend.length - 1
                      ? modalStyle.endItem
                      : null
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
