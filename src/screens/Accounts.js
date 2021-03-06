/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {CheckBox} from 'native-base';
import ModalCenter from '../modals/ModalCenter';
import ContentDelete from '../components/ContentDelete';
import PreChangePhone from '../modals/PreChangePhone';
import ChangePhone from '../modals/ChangePhone';
import PreChangeEmail from '../modals/PreChangeEmail';
import ChangeEmail from '../modals/ChangeEmail';
import ChangePassword from '../modals/ChangePassword';
import AddPassword from '../modals/AddPassword';
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';
import passwordAction from '../redux/actions/password';

export default function Accounts() {
  const userData = useSelector((state) => state.profile.myProfile);
  const {token} = useSelector((state) => state.auth);
  const {isPasswordExist} = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const [allowAdd, setAllowAdd] = React.useState(false);
  const [openModalDel, setOpenModalDel] = React.useState(false);
  const [modalPre, setModalPre] = React.useState(false);
  const [modalPhone, setModalPhone] = React.useState(false);
  const [preEmail, setPreEmail] = React.useState(false);
  const [modalEmail, setModalEmail] = React.useState(false);
  const [modalPassword, setModalPassword] = React.useState(false);

  React.useEffect(() => {
    dispatch(passwordAction.checkPassword(token));
  }, []);

  React.useEffect(() => {
    dispatch(passwordAction.checkPassword(token));
  }, [modalPassword]);

  const updateProfile = (data) => {
    dispatch(profileAction.patchProfile(token, data));
  };

  const changeEmail = () => {
    setPreEmail(true);
  };

  const changePhone = () => {
    setModalPre(true);
  };

  const changePassword = () => {
    setModalPassword(true);
  };

  return (
    <SafeAreaView style={styles.parent}>
      {/* status bar */}
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />

      {/* modal to delete */}
      <ModalCenter
        modalOpen={openModalDel}
        setModalOpen={setOpenModalDel}
        modalContent={<ContentDelete setModalOpen={setOpenModalDel} />}
      />

      {/* modal to change number */}
      <PreChangePhone
        modalOpen={modalPre}
        setModalOpen={setModalPre}
        setModalNext={setModalPhone}
        phoneNumber={userData.phone}
      />
      <ChangePhone
        modalOpen={modalPhone}
        setModalOpen={setModalPhone}
        setModalBefore={setModalPre}
        updateProfile={updateProfile}
      />

      {/* modal to change email */}
      <PreChangeEmail
        modalOpen={preEmail}
        setModalOpen={setPreEmail}
        setModalNext={setModalEmail}
        emailAddress={userData.email}
      />
      <ChangeEmail
        modalOpen={modalEmail}
        setModalOpen={setModalEmail}
        setModalBefore={setPreEmail}
        updateProfile={updateProfile}
      />

      {/* modal to change password */}
      {isPasswordExist ? (
        <ChangePassword
          modalOpen={modalPassword}
          setModalOpen={setModalPassword}
        />
      ) : (
        <AddPassword
          modalOpen={modalPassword}
          setModalOpen={setModalPassword}
        />
      )}

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
        <View style={styles.buttonCheckbox}>
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
          onPress={() => setOpenModalDel(true)}
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
