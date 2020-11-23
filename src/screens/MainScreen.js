import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import connectLogo from '../assets/logo/connectLogo.png';
import {Feather, Ionicons, MaterialIcons} from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

function Header() {
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
    lastChat: 'di mana?',
    unreadChat: 0,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 7,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 8,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 9,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 10,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 11,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'woi di mane lu?',
    unreadChat: 3,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
  {
    id: 12,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    lastChat: 'weh??',
    unreadChat: 0,
    sendAt: '2020-11-18T11:13:40.000Z',
  },
];

function ChatList({item}) {
  const navigation = useNavigation();
  const {item: chatItem} = item;
  let {id, name, avatar, lastChat, unreadChat, sendAt} = chatItem;

  const goToRoomChat = () => {
    navigation.navigate('ChatRoom');
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

export default function MainScreen() {
  const navigation = useNavigation();
  const chatList = apiChat;
  const newChat = () => {
    console.log('create new chat');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <Header />
      <View style={styles.chatParent}>
        <FlatList
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
