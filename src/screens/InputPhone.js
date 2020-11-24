import {Form, Input, Item, Label} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Entypo, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import authAction from '../redux/actions/auth';
import {useSelector, useDispatch} from 'react-redux';

export default function LoginEmail() {
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState();
  const [countryCode, setCountryCode] = React.useState('');
  const [countryName, setCountryName] = React.useState('Indonesia');
  const [openList, setOpenList] = React.useState(false);
  const navigation = useNavigation();
  const {token, isCreated} = useSelector((state) => state.auth);
  // const token = useSelector((state) => state.auth.token);
  // const user = useSelector((state) => state.auth.user);
  // const isCreated = useSelector((state) => state.auth.isCreated);

  const delPhone = () => {
    setPhone(null);
  };

  const goConfirm = () => {
    dispatch(authAction.signup({phone}));
  };

  React.useEffect(() => {
    if (token && isCreated) {
      console.log(token);
      console.log(isCreated);
      navigation.navigate('CreateNew');
    } else if (token && !isCreated) {
      console.log(token);
      console.log(isCreated);
      navigation.navigate('AlreadyHave');
    }
    console.log('go login');
  }, [token, isCreated, navigation]);

  const goToTOC = () => {
    console.log('go to TOC');
  };

  const goToPrivacyPolicy = () => {
    console.log('go to privacy policy');
  };

  const openCountryList = () => {
    setOpenList(!openList);
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            What's the phone number for this device?
          </Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            By tapping the arrow button, you accept LINE's
          </Text>
          <TouchableOpacity onPress={goToTOC}>
            <Text style={[styles.txt, styles.txtLink]}>
              Terms and Condition of Use
            </Text>
          </TouchableOpacity>
          <Text style={styles.txt}> and </Text>
          <TouchableOpacity onPress={goToPrivacyPolicy}>
            <Text style={[styles.txt, styles.txtLink]}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.countrySelector}
          onPress={openCountryList}>
          <Text style={styles.country}>{countryName} </Text>
          <AntDesign name="caretdown" size={12} color="black" />
        </TouchableOpacity>

        <Form style={styles.form}>
          <Item style={phone ? styles.itemEnter : null}>
            <Label style={styles.labelStyle}>{countryCode}</Label>
            <Input
              placeholder="Phone Number"
              value={phone}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(e) => setPhone(e)}
            />
            {phone ? (
              <TouchableOpacity onPress={delPhone}>
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={!phone}
          onPress={goConfirm}
          style={[styles.btn, phone ? styles.btnActive : null]}>
          <AntDesign name="arrowright" size={25} color="white" />
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
  titleWrapper: {
    marginBottom: 10,
    width: '100%',
    padding: '5%',
  },
  title: {
    fontSize: 28,
  },
  txtWrapper: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  txt: {
    alignItems: 'center',
    fontSize: 16,
    color: '#D2D2D2',
  },
  txtLink: {
    color: '#56CF75',
    textDecorationLine: 'underline',
  },
  countrySelector: {
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  country: {
    fontSize: 18,
  },
  form: {
    marginVertical: 10,
    alignItems: 'center',
    paddingRight: '5%',
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  labelStyle: {
    color: 'black',
  },
  bottom: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
});
