import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Entypo} from '@expo/vector-icons';
import ModalChangeName from '../modals/ChangeName';
import ModalChangeStatus from '../modals/ChangeStatus';
import ModalChangeUserID from '../modals/ChangeUserID';

const data = [
  {
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    idName: 'syamsulbahari',
    phone: '089633449007',
    status: 'On my Way',
  },
];

export default function Profile() {
  const [userData] = data;
  const [modalName, setModalName] = React.useState(false);
  const [modalStatus, setModalStatus] = React.useState(false);
  const [modalID, setModalID] = React.useState(false);

  const changeAva = () => {
    console.log('change ava');
  };

  const changePhone = () => {
    console.log('change phone');
  };

  const changeID = () => {
    setModalID(true);
  };

  const changeName = () => {
    setModalName(true);
  };

  const changeStatus = () => {
    setModalStatus(true);
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />

      {/* modal change name */}
      <ModalChangeName modalOpen={modalName} setModalOpen={setModalName} />

      {/* modal change status */}
      <ModalChangeStatus
        modalOpen={modalStatus}
        setModalOpen={setModalStatus}
      />

      <ModalChangeUserID modalOpen={modalID} setModalOpen={setModalID} />

      <View style={styles.header}>
        <Text style={styles.headerTxt}>Profile</Text>
      </View>
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={changeAva} style={styles.avatarWrapper}>
          <Image source={{uri: userData.avatar}} style={styles.avatar} />
          <View style={styles.iconWrapper}>
            <Entypo name="camera" size={15} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={changePhone} style={styles.nameWrapper}>
          <Text style={styles.idNameKey}>Phone Number</Text>
          <Text style={styles.name}>{userData.phone}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={changeName} style={styles.buttonWrapper}>
          <Text style={styles.title}>Display Name</Text>
          <Text style={styles.displayName}>{userData.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeStatus} style={styles.buttonWrapper}>
          <Text style={styles.title}>Status Message</Text>
          <Text style={styles.statusMessage}>{userData.status}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeID} style={styles.buttonWrapper}>
          <Text style={styles.title}>User ID</Text>
          <Text style={styles.userID}>{userData.idName}</Text>
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
  photoWrapper: {
    flexDirection: 'row',
    width: '100%',
    padding: '5%',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    position: 'relative',
  },
  avatarWrapper: {
    width: '25%',
    alignItems: 'center',
    alignContent: 'center',
  },
  avatar: {
    width: '100%',
    borderRadius: 300,
    aspectRatio: 1 / 1,
  },
  nameWrapper: {
    flex: 1,
    marginHorizontal: '3%',
    padding: '5%',
  },
  name: {
    color: '#222',
    fontSize: 20,
  },
  idNameWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  idNameKey: {
    color: '#777',
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    height: 'auto',
    width: '100%',
    paddingLeft: '5%',
  },
  buttonWrapper: {
    width: '100%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 14,
    color: '#222',
  },
  displayName: {
    fontSize: 12,
    color: '#02075D',
  },
  statusMessage: {
    fontSize: 12,
    color: '#999',
  },
  userID: {
    fontSize: 12,
    color: '#999',
  },
});
