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
import {useSelector, useDispatch} from 'react-redux';
import authAction from '../redux/actions/auth';
import profileAction from '../redux/actions/profile';
import placeholder from '../assets/photos/profilePlaceholder.png';
import ModalCenter from '../modals/ModalCenter';
import ContentSelector from '../components/ContentSelector';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const {EXPO_API_URL} = process.env;

export default function Profile() {
  const userData = useSelector((state) => state.profile.myProfile);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [modalName, setModalName] = React.useState(false);
  const [modalStatus, setModalStatus] = React.useState(false);
  const [modalID, setModalID] = React.useState(false);
  const [modalOption, setModalOption] = React.useState(false);
  const [avatar, setAvatar] = React.useState('');

  const changeAva = () => {
    setModalOption(true);
  };

  const updateProfile = (data) => {
    console.log(data);
    dispatch(profileAction.patchProfile(token, data));
  };

  const changePhone = () => {
    console.log('change phone');
  };

  const changeID = () => {
    if (!userData.idName) {
      setModalID(true);
    }
  };

  const changeName = () => {
    setModalName(true);
  };

  const changeStatus = () => {
    setModalStatus(true);
  };

  const selectOption = ['Open Galery', 'Open Camera'];

  const uploadData = new FormData();

  const selectAction = async (index) => {
    if (index === 0) {
      console.log('open galery');
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log(result);
      if (!result.cancelled) {
        if (result.type === 'image') {
          const manipResult = await ImageManipulator.manipulateAsync(
            result.uri,
            [],
            {compress: 0.4},
          );
          uploadData.append('avatar', result.uri);
          console.log(uploadData);
          updateProfile(uploadData);
          setAvatar(manipResult.uri);
        } else {
          alert('file must be image!');
        }
      }
      setModalOption(false);
    } else if (index === 1) {
      console.log('open camera');
      setModalOption(false);
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />

      {/* modal change name */}
      <ModalChangeName
        modalOpen={modalName}
        setModalOpen={setModalName}
        updateProfile={updateProfile}
      />

      {/* modal change status */}
      <ModalChangeStatus
        modalOpen={modalStatus}
        setModalOpen={setModalStatus}
        updateProfile={updateProfile}
      />

      {/* modal change user ID */}
      <ModalChangeUserID
        modalOpen={modalID}
        setModalOpen={setModalID}
        updateProfile={updateProfile}
      />

      {/* select camera or gallery */}
      <ModalCenter
        modalOpen={modalOption}
        setModalOpen={setModalOption}
        modalContent={
          <ContentSelector sortOption={selectOption} setOption={selectAction} />
        }
      />

      <View style={styles.header}>
        <Text style={styles.headerTxt}>Profile</Text>
      </View>
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={changeAva} style={styles.avatarWrapper}>
          <Image
            source={
              avatar
                ? {uri: avatar}
                : userData.ava
                ? {uri: EXPO_API_URL + userData.ava}
                : placeholder
            }
            style={styles.avatar}
          />
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
          <Text
            style={[
              styles.displayName,
              !userData.name ? styles.notSetTxt : null,
            ]}>
            {userData.name ? userData.name : 'Not Set'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeStatus} style={styles.buttonWrapper}>
          <Text style={styles.title}>Status Message</Text>
          <Text style={styles.statusMessage}>{userData.status}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeID} style={styles.buttonWrapper}>
          <Text style={styles.title}>User ID</Text>
          <Text
            style={[styles.userID, !userData.idName ? styles.notSetID : null]}>
            {userData.idName ? userData.idName : 'set your ID'}
          </Text>
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
    width: 80,
    height: 80,
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
  notSetTxt: {
    color: '#999',
  },
  statusMessage: {
    fontSize: 12,
    color: '#999',
  },
  userID: {
    fontSize: 12,
    color: '#999',
  },
  notSetID: {
    color: '#02075D',
  },
});
