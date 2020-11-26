/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';
import authAction from '../redux/actions/auth';
import passwordAction from '../redux/actions/password';
import {useNavigation} from '@react-navigation/native';

export default function ContentDelete({setModalOpen}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {token, isLogin} = useSelector((state) => state.auth);
  const [logoutClick, setLogoutClick] = React.useState(false);
  const authState = useSelector((state) => state.auth.authState);

  React.useEffect(() => {
    if (logoutClick && authState) {
      navigation.navigate('AuthStack');
      setModalOpen(false);
    }
  }, [authState, logoutClick]);

  const cancel = () => {
    setModalOpen(false);
  };

  const proceed = () => {
    dispatch(profileAction.deleteAccount(token));
    dispatch(authAction.logout());
    dispatch(profileAction.logout());
    dispatch(passwordAction.logout());
    setLogoutClick(true);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={contents.parent}>
        <View style={contents.textWrapper}>
          <Text style={contents.content}>
            Once you delete your account, you will be unable to retrieve your
            friends list, chat or purchase history.
          </Text>
          <Text style={contents.content}>Are you sure want to proceed?</Text>
        </View>
        <View style={contents.buttonWrapper}>
          <TouchableOpacity onPress={cancel} style={contents.btn}>
            <Text style={contents.btnNo}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={proceed} style={contents.btn}>
            <Text style={contents.btnYes}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const contents = StyleSheet.create({
  parent: {
    width: '70%',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textWrapper: {
    width: '100%',
    padding: '5%',
  },
  content: {
    color: '#999',
    fontSize: 14,
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    padding: '5%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYes: {
    color: 'red',
    fontSize: 14,
  },
  btnNo: {
    color: '#222',
    fontSize: 14,
  },
});
