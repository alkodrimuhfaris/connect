/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
} from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import {Form} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import chatAction from '../redux/actions/chat';
import Header from '../components/HeaderChat';
import BubleChat from '../components/BubleChat';

export default function ChatRoom({route}) {
  const dispatch = useDispatch();
  const [chat, setChat] = React.useState('');
  const {openOption} = useSelector((state) => state.chat);
  const [loading, setLoading] = React.useState(false);
  const {id} = route.params;
  const {token} = useSelector((state) => state.auth);
  const {id: myId} = useSelector((state) => state.auth);
  const {profileColluctor, privateChatPageInfo: pageInfo} = useSelector(
    (state) => state.chat,
  );
  const dataChat = useSelector((state) => state.chat.privateChat);
  const [privateChat, setPrivateChat] = React.useState([]);

  React.useEffect(() => {
    setPrivateChat(dataChat);
    dispatch(chatAction.getAllList(token));
  }, [dataChat]);

  React.useEffect(() => {
    console.log(id);
    console.log(token);
    dispatch(chatAction.getPrivate(token, id));
  }, []);

  const changeText = (e) => {
    console.log(e);
    setChat(e);
  };

  const sendChat = () => {
    console.log(id);
    console.log(token);
    console.log(chat);
    dispatch(chatAction.sendChat(token, id, chat));
    setChat('');
  };

  const addFile = () => {
    console.log('add file');
  };

  const endEmoji = () => {
    console.log('send emoji');
  };

  const doRefresh = () => {
    setLoading(true);
    dispatch(chatAction.getPrivate(token, id));
    setLoading(false);
  };

  const nextPage = () => {
    if (pageInfo.pages > pageInfo.currentPage) {
      dispatch(chatAction.privateScroll(token, id, pageInfo.currentPage + 1));
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.chatParent}>
        {openOption ? (
          <View style={styles.option}>
            <Text>option goes here</Text>
          </View>
        ) : null}
        <View style={styles.bubleChatParent}>
          <View style={styles.bubleChatWrapper}>
            <FlatList
              inverted
              onEndReached={nextPage}
              onEndReachedThreshold={0.5}
              refreshing={loading}
              onRefresh={doRefresh}
              data={privateChat}
              renderItem={(item) => {
                return (
                  <BubleChat
                    item={item}
                    selfId={myId}
                    colluctorAva={profileColluctor.ava}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.buttomButton}>
          <Feather name="plus" size={24} color="#152238" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttomButton}>
          <SimpleLineIcons name="emotsmile" size={24} color="#152238" />
        </TouchableOpacity>
        <View style={styles.textAreaWrapper}>
          <Form style={styles.textArea}>
            <TextInput
              onChangeText={(e) => changeText(e)}
              multiline
              value={chat}
              style={styles.contentText}
              placeholder="Type chat here"
            />
          </Form>
        </View>
        {!chat ? (
          <TouchableOpacity style={styles.buttomButton}>
            <MaterialCommunityIcons
              name="microphone"
              size={24}
              color="#152238"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={sendChat} style={styles.buttomButton}>
            <MaterialCommunityIcons name="send" size={24} color="#152238" />
          </TouchableOpacity>
        )}
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
  option: {
    position: 'absolute',
    right: 0,
    width: '50%',
    flex: 1,
    borderWidth: 0.1,
    elevation: 1,
    backgroundColor: 'white',
  },
  bubleChatParent: {
    width: '100%',
    flex: 1,
    alignContent: 'flex-start',
  },
  bubleChatWrapper: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
  },
  bottom: {
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 0.25,
    width: '100%',
    height: 'auto',
    paddingHorizontal: '2%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  chatParent: {
    width: '100%',
    flex: 1,
  },
  buttomButton: {
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  textAreaWrapper: {
    width: '70%',
  },
  textArea: {
    paddingHorizontal: '5%',
    height: 45,
    justifyContent: 'center',
    width: '100%',
  },
  contentText: {
    fontSize: 16,
  },
  bottomList: {
    marginBottom: '20%',
  },
});
