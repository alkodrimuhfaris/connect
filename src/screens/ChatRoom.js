import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import connectLogo from '../assets/logo/connectLogo.png';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import moment from 'moment';
import {Form, Textarea} from 'native-base';

function Header({name = 'Syamsul Bahari', openOption}) {
  const goCall = () => {
    console.log('call');
  };

  const getNotes = () => {
    console.log('get my friend');
  };

  return (
    <View style={headerStyle.parent}>
      <View style={headerStyle.titleWrapper}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={headerStyle.title}>
          {name}
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

const apiChat = [
  {
    id: 1,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 2,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 3,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 4,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 5,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 6,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'Ajg!!',
    unreadChat: 0,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 1,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 2,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 3,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 4,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 5,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 6,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'Ajg!!',
    unreadChat: 0,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
];

function ChatList({item}) {
  const {item: chatItem} = item;
  let {id, name, avatar, lastChat, unreadChat, sendAt} = chatItem;

  const goToRoomChat = () => {
    console.log(id);
  };

  return (
    <TouchableOpacity onPress={goToRoomChat} style={listStyles.parent}>
      <View style={listStyles.imageWrapper}>
        <Image
          source={{
            uri: avatar,
          }}
          style={listStyles.image}
        />
      </View>
      <View style={listStyles.contentWrapper}>
        <View style={listStyles.headerWrapper}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={listStyles.name}>
            {name}
          </Text>
          <Text style={listStyles.time}>
            {moment(sendAt).format('MMM DD, YY')}
          </Text>
        </View>

        <View style={listStyles.chatWrapper}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={listStyles.content}>
            {lastChat}
          </Text>
          {unreadChat ? (
            <View style={listStyles.unreadContainer}>
              <View style={listStyles.unreadWrapper}>
                <Text style={listStyles.unreadTxt}>
                  {unreadChat > 999 ? '999+' : unreadChat}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const listStyles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginVertical: 3,
    width: '100%',
    height: 70,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    // backgroundColor: 'green',
  },
  image: {
    aspectRatio: 1 / 1,
    borderRadius: 300,
    width: '100%',
  },
  contentWrapper: {
    height: '100%',
    width: '85%',
    justifyContent: 'flex-start',
    paddingLeft: '3%',
    paddingVertical: '2%',
    // backgroundColor: 'pink',
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: '#222',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  chatWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content: {
    fontSize: 14,
    width: '80%',
    color: '#999',
  },
  unreadContainer: {
    width: '20%',
    alignItems: 'flex-end',
  },
  unreadWrapper: {
    backgroundColor: '#56CF75',
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  unreadTxt: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default function ChatRoom() {
  const [chat, setChat] = React.useState('');
  const [openOption, setOpenOption] = React.useState(false);

  const changeText = (e) => {
    setChat(e);
  };

  const sendChat = () => {
    console.log(chat);
  };

  const addFile = () => {
    console.log('add file');
  };

  const endEmoji = () => {
    console.log('send emoji');
  };

  const toggleOption = () => {
    setOpenOption(!openOption);
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <Header openOption={toggleOption} />
      <View style={styles.chatParent}>
        {openOption ? (
          <View style={styles.option}>
            <Text>Option Goes here</Text>
          </View>
        ) : null}
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
          <TouchableOpacity style={styles.buttomButton}>
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
  },
  bottom: {
    position: 'absolute',
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 0.25,
    bottom: 0,
    width: '100%',
    height: 'auto',
    paddingHorizontal: '2%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttomButton: {
    padding: 10,
  },
  btnActive: {
    backgroundColor: '#56CF75',
  },
  btn: {
    backgroundColor: '#D2D2D2',
    width: 50,
    height: 'auto',
    borderRadius: 70,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatParent: {
    width: '100%',
    flex: 1,
  },
  textAreaWrapper: {
    width: '60%',
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
