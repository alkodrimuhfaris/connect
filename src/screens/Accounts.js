import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {CheckBox} from 'native-base';
import ModalCenter from '../components/ModalCenter';
import ContentDelete from '../components/ContentDelete';
import ModalFull from '../components/ModalFull';

const data = [
  {
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    idName: 'syamsulbahari',
    phone: '089633449007',
    status: 'On my Way',
    email: 'farisalkodri@gmail.com',
  },
];

export default function Accounts() {
  const [userData] = data;
  const [allowAdd, setAllowAdd] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const changeEmail = () => {
    console.log('change ava');
  };

  const changePhone = () => {
    console.log('change phone');
  };

  const changePassword = () => {
    console.log('change phone');
  };

  return (
    <SafeAreaView style={styles.parent}>
      {/* status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />

      {/* modal to delete */}
      <ModalFull
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalContent={<ContentDelete setModalOpen={setModalOpen} />}
      />

      <View style={styles.header}>
        <Text style={styles.headerTxt}>Account</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={changePhone} style={styles.buttonWrapper}>
          <Text style={styles.title}>Phone Number</Text>
          <Text style={styles.subTitle}>{userData.phone}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeEmail} style={styles.buttonWrapper}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.subTitle}>{userData.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changePassword} style={styles.buttonWrapper}>
          <Text style={styles.title}>Password</Text>
          <Text style={styles.subTitle}>Change Your Password</Text>
        </TouchableOpacity>
        <View onPress={changePassword} style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Allow Others to Add by ID</Text>
            <Text numberOfLines={2} style={styles.subTitleCheckbox}>
              People can add you as a friend by searching your ID
            </Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={allowAdd}
              onPress={() => setAllowAdd(!allowAdd)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Delete My Account</Text>
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
  buttonCheckbox: {
    width: '100%',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 14,
    color: '#222',
  },
  subTitle: {
    fontSize: 12,
    color: '#0066CC',
  },
  textWrapper: {
    width: '80%',
  },
  subTitleCheckbox: {
    fontSize: 12,
    color: '#999',
  },
  checkbox: {
    marginRight: '10%',
  },
});
