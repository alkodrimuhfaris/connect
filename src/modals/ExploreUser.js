/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Form, Input, Item} from 'native-base';
import {Entypo, EvilIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import userAction from '../redux/actions/user';
import ModalCenter from '../modals/ModalCenter';
import ModalLoading from '../modals/ModalLoading';
import ContentSelector from '../components/ContentSelector';
import chatAction from '../redux/actions/chat';
import UserList from '../components/UserList';

export default function SelectFriend() {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.user.isLoadingGetData);
  const allUser = useSelector((state) => state.user.allUser);
  const pageInfo = useSelector((state) => state.user.pageInfoAllUser);
  const [search, setSearch] = React.useState('');
  const [searchMode, setSearchMode] = React.useState(0);
  const [modalCenter, setModalCenter] = React.useState(false);
  const modalOpen = useSelector((state) => state.chat.openAdd);
  const [refresh, setRefresh] = React.useState(false);

  const setModalOpen = (opt) => {
    dispatch(chatAction.openAddFriend(opt));
  };

  const arrSearch = ['By Name', 'By Phone', 'By Id'];

  const goSearch = () => {
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
  };

  React.useEffect(() => {
    console.log(search);
    dispatch(userAction.getAllUser(token));
  }, []);

  const setModalSelector = (index) => {
    setSearchMode(index);
    setModalCenter(false);
  };

  const doRefresh = () => {
    setRefresh(true);
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
    setRefresh(false);
  };

  const nextPage = () => {
    if (pageInfo.pages > pageInfo.currentPage) {
      if (searchMode === 0) {
        console.log('search by name');
        dispatch(
          userAction.scrollAllUser(token, pageInfo.currentPage + 1, {search}),
        );
      } else if (searchMode === 1) {
        console.log('search by phone');
        dispatch(
          userAction.scrollAllUser(token, pageInfo.currentPage + 1, {
            phone: search,
          }),
        );
      } else if (searchMode === 2) {
        console.log('search by phone');
        dispatch(
          userAction.scrollAllUser(token, pageInfo.currentPage + 1, {
            idName: search,
          }),
        );
      }
    }
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <View style={modalStyle.parent}>
        {/* modal center */}
        <ModalCenter
          modalOpen={modalCenter}
          setModalOpen={setModalCenter}
          modalContent={
            <ContentSelector
              sortOption={arrSearch}
              setOption={setModalSelector}
            />
          }
        />

        {/* modal loading */}
        <ModalLoading
          modalOpen={isLoading}
          modalContent={
            <ActivityIndicator
              visible={isLoading}
              size="large"
              color="#56CF75"
            />
          }
        />

        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTxt}>Explore and add new friend!</Text>
        </View>
        <Form style={modalStyle.form}>
          <Item style={search ? modalStyle.itemEnter : null}>
            <Input
              placeholder="Search Here"
              value={search}
              style={modalStyle.input}
              onChangeText={(e) => setSearch(e)}
              keyboardType={searchMode === 1 ? 'numeric' : 'default'}
              returnKeyType="done"
            />
            {search ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={modalStyle.searchBtn} onPress={goSearch}>
              <EvilIcons name="search" size={24} color="white" />
            </TouchableOpacity>
          </Item>
        </Form>
        <View style={modalStyle.searchBtnContainer}>
          <TouchableOpacity
            onPress={() => setModalCenter(true)}
            style={modalStyle.searchOpt}>
            <Text style={modalStyle.searchOptTxt}>
              Search {arrSearch[searchMode]}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={modalStyle.friendWrapper}>
          <FlatList
            onEndReached={nextPage}
            onEndReachedThreshold={0.5}
            onRefresh={doRefresh}
            refreshing={refresh}
            data={allUser}
            renderItem={(item) => {
              return (
                <View
                  style={
                    item.index === allUser.length - 1
                      ? modalStyle.endItem
                      : null
                  }>
                  <UserList
                    item={item}
                    searchMode={searchMode}
                    search={search}
                  />
                </View>
              );
            }}
          />
        </View>
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
  friendWrapper: {
    flex: 1,
    // height: '80%',
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
  searchBtnContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: 5,
    marginBottom: 10,
  },
  searchBtnWrapper: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
  },
  searchOpt: {
    width: '50%',
  },
  searchOptTxt: {
    color: '#222',
    fontSize: 16,
  },
  searchBtn: {
    backgroundColor: '#56CF75',
    padding: 10,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
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
