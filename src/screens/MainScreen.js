/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import {useSelector, useDispatch} from 'react-redux';
import chatAction from '../redux/actions/chat';
import Header from '../components/HeaderHome';
import ChatList from '../components/ChatList';

export default function MainScreen() {
  const {listAllChat: chatList, allChatPageInfo: pageInfo} = useSelector(
    (state) => state.chat,
  );
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const newChat = () => {
    console.log('create new chat');
  };
  React.useEffect(() => {
    dispatch(chatAction.getAllList(token));
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
      <Header />
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
