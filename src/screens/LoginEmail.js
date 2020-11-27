import {Form, Input, Item} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import authAction from '../redux/actions/auth';
import {useSelector, useDispatch} from 'react-redux';

export default function LoginEmail() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  React.useEffect(() => {
    if (isLogin) {
      navigation.navigate('MainStack', {screen: 'MainScreen'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const delEmail = () => {
    setEmail('');
  };

  const delPassword = () => {
    setPassword('');
  };

  const goLogin = () => {
    dispatch(authAction.login({email, password}));
    console.log('go login');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <Form style={styles.form}>
          <Item style={email ? styles.itemEnter : null}>
            <Input
              placeholder="Email"
              value={email}
              style={styles.input}
              onChangeText={(e) => setEmail(e)}
            />
            {email ? (
              <TouchableOpacity onPress={delEmail}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
          <Item style={password ? styles.itemEnter : null}>
            <Input
              placeholder="Password"
              secureTextEntry
              value={password}
              style={styles.input}
              onChangeText={(e) => setPassword(e)}
            />
            {password ? (
              <TouchableOpacity onPress={delPassword}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>

        <View style={styles.linkWrapper}>
          <TouchableOpacity style={styles.forgotWrapper}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.qrWrapper}>
            <MaterialCommunityIcons name="qrcode" size={24} color="black" />
            <Text style={styles.qrTxt}> Log in with QR code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={!(email && password)}
          onPress={goLogin}
          style={[styles.btn, email && password ? styles.btnActive : null]}>
          <Text style={styles.btnTxt}>OK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  top: {
    marginTop: '10%',
    width: '100%',
  },
  form: {
    marginBottom: 20,
    alignItems: 'center',
    paddingRight: '5%',
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  linkWrapper: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  forgotWrapper: {
    width: 'auto',
  },
  forgot: {
    fontSize: 14,
    color: '#ABABAB',
    textDecorationLine: 'underline',
  },
  qrWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  qrTxt: {
    fontSize: 18,
  },
  bottom: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: '5%',
  },
  btnActive: {
    backgroundColor: '#56CF75',
  },
  btn: {
    backgroundColor: '#D2D2D2',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 18,
  },
});
