import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

function FriendsList({item}) {
  const {item: friendData} = item;
  const {id, avatar, name, status} = friendData;
  const [openModalOpt, setModalOpt] = React.useState(false);

  const goEdit = () => {
    setModalOpt(true);
  };

  return (
    <View style={friendStyle.parent}>
      <View style={friendStyle.imageWrapper}>
        <Image source={{uri: avatar}} style={friendStyle.image} />
      </View>
      <View style={friendStyle.nameWrapper}>
        <Text style={friendStyle.name}>{name}</Text>
        <Text style={friendStyle.status}>{status}</Text>
      </View>
      <View style={friendStyle.btnWrapper}>
        <TouchableOpacity onPress={goEdit} style={friendStyle.btn}>
          <Text style={friendStyle.btnTxt}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const friendStyle = StyleSheet.create({
  parent: {
    width: '100%',
    paddingHorizontal: '5%',
    marginVertical: 2,
    flexDirection: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: '20%',
    padding: '2%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 300,
  },
  nameWrapper: {
    flex: 1,
    alignContent: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '2%',
  },
  name: {
    color: '#222',
    fontSize: 14,
  },
  status: {
    fontSize: 12,
    color: '#999',
  },
  btnWrapper: {
    width: '30%',
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: '5%',
    backgroundColor: '#56CF75',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 12,
  },
});

const apiUser = [
  {
    id: 1,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'semoga bisa!',
  },
  {
    id: 2,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'Yakin!',
  },
  {
    id: 3,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'hubungi saya!',
  },
  {
    id: 4,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'mencintaimu',
  },
  {
    id: 5,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'di antara dua dunia',
  },
  {
    id: 6,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'menyayangi lebih dari apapun',
  },
  {
    id: 7,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'berfikir kritis',
  },
  {
    id: 8,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'ingin mencapai target!',
  },
  {
    id: 9,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'semangat!',
  },
  {
    id: 10,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'Family <3',
  },
  {
    id: 11,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'barasuara!',
  },
  {
    id: 12,
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    status: 'Menanti Matahari',
  },
];

export default function ModalFull({modalOpen, setModalOpen}) {
  const hiddenList = apiUser;

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <View style={modalStyle.parent}>
        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTxt}>Block user</Text>
        </View>
        <View style={modalStyle.jumbotron}>
          <Text style={modalStyle.jumbotronTxt}>
            Friends will be deleted if you remove them from your list of hidden
            users. Use ID Search to add them to your friends list again.
          </Text>
        </View>
        <View style={modalStyle.flatlistWrapper}>
          <FlatList
          data={hiddenList}
          renderItem={(item) => {
            <
          }}
           />
        </View>
      </View>
    </Modal>
  );
}

const modalStyle = StyleSheet.create({
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
    backgroundColor: 'white',
  },
  headerTxt: {
    fontSize: 18,
    color: '#222',
  },
  jumbotron: {
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    backgroundColor: '#eee',
  },
  jumbotronTxt: {
    color: '#bbb',
  },
  flatlistWrapper: {
    width: '100%',
  },
});
