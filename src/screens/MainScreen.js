/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import chatAction from '../redux/actions/chat';
import authAction from '../redux/actions/auth';
import ChatList from '../components/ChatList';
import SelectFriend from '../modals/SelectFriend';
import ExploreUser from '../modals/ExploreUser';
import ModalLoading from '../modals/ModalLoading';
// import socket from '../helpers/socket';
import io from 'socket.io-client';
const {EXPO_API_URL} = process.env;

export default function MainScreen() {
  const chatList = useSelector((state) => state.chat.listAllChat);
  const pageInfo = useSelector((state) => state.chat.allChatPageInfo);
  const selfId = useSelector((state) => state.auth.id);
  const isLoading = useSelector((state) => state.user.isLoading);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {token, authState} = useSelector((state) => state.auth);
  const [openSelectChat, setOpenSelectChat] = React.useState(false);

  const newChat = () => {
    console.log(openSelectChat);
    setOpenSelectChat(true);
    console.log('whaw');
  };

  React.useEffect(() => {
    const socket = io(EXPO_API_URL);
    const readEvent = 'read ' + selfId;
    const sendEvent = 'send ' + selfId;
    console.log(authState);
    dispatch(authAction.inMainScreen());
    dispatch(chatAction.getAllList(token));
    socket.on(sendEvent, ({senderData, message}) => {
      console.log('theres an event');
      dispatch(chatAction.getAllList(token));
      dispatch(chatAction.getPrivate(token, senderData.id));
    });
    socket.on(readEvent, ({reciever, read}) => {
      dispatch(chatAction.getAllList(token));
      dispatch(chatAction.getPrivate(token, reciever));
    });
    return () => {
      socket.close();
    };
  }, []);

  const doRefresh = () => {
    setLoading(true);
    dispatch(chatAction.getAllList(token));
    setLoading(false);
  };

  const nextPage = () => {
    if (pageInfo.pages > pageInfo.currentPage) {
      dispatch(chatAction.allListScroll(token, pageInfo.currentPage + 1));
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      {/* modal for select friend */}
      <SelectFriend
        modalOpen={openSelectChat}
        setModalOpen={setOpenSelectChat}
      />

      {/* modal for add friend */}
      <ExploreUser />

      {/* modal for loading */}
      <ModalLoading
        modalOpen={isLoading}
        modalContent={
          <ActivityIndicator visible={isLoading} size="large" color="#56CF75" />
        }
      />

      <View style={styles.chatParent}>
        <FlatList
          onRefresh={doRefresh}
          refreshing={loading}
          onEndReached={nextPage}
          onEndReachedThreshold={0.5}
          style={styles.flatList}
          data={chatList.length ? chatList : []}
          renderItem={(item) => {
            return (
              <View
                style={
                  item.index === chatList.length - 1 ? styles.bottomList : null
                }>
                <ChatList item={item} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={newChat}
          style={[styles.btn, styles.btnActive]}>
          <Feather name="plus" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    // height: Dimensions.get('screen').height - StatusBar.currentHeight,
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 70,
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnActive: {
    backgroundColor: '#56CF75',
  },
  btn: {
    backgroundColor: '#D2D2D2',
    width: 50,
    height: 50,
    borderRadius: 70,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatParent: {
    width: '100%',
    flex: 1,
  },
  bottomList: {
    marginBottom: '20%',
  },
});
