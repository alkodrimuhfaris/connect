import {Form, Item} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Entypo, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

function checkCode(input) {
  const code = '334401';
  input = code === input.code;
  return input;
}

function checkPhone(input) {
  const phone = '089633449007';
  input = phone === input.phone;
  return input;
}

export default function ConfirmPhone({route}) {
  const {phone} = route.params;
  const [code, setCode] = React.useState('');
  const [wrongCode, setWrongCode] = React.useState(false);
  const navigation = useNavigation();

  const delCode = () => {
    setCode('');
  };

  React.useEffect(() => {
    const data = {phone, code};
    console.log(phone);
    if (code.length === 6) {
      const result = checkCode(data);
      !result && setWrongCode(true);
    } else {
      setWrongCode(false);
    }
  }, [code, phone]);

  React.useEffect(() => {
    wrongCode && setCode('');
  }, [wrongCode]);

  const goConfirm = () => {
    const data = {phone, code};
    const result = checkPhone(data);
    if (result) {
      navigation.navigate('AlreadyHave');
    } else {
      navigation.navigate('CreateNew');
    }
    console.log('check id');
  };

  const goResend = () => {
    console.log('resend the code');
  };

  const goCall = () => {
    console.log('call the phone');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Enter verification code</Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            We've sent a text message with your verification code to{' '}
            {<Text style={[styles.txt, styles.txtNumber]}>{phone}</Text>}
          </Text>
        </View>

        <Form style={styles.form}>
          <Item
            style={[
              code ? styles.itemEnter : null,
              wrongCode ? styles.itemEnterWrong : null,
            ]}>
            <SmoothPinCodeInput
              cellStyle={styles.inputCode}
              cellStyleFocused={styles.inputCodeFocused}
              codeLength={6}
              cellSize={36}
              value={code}
              onTextChange={(e) => setCode(e)}
            />
            {/* <Input
              placeholder="Your OTP"
              value={code}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(e) => setCode(e)}
              disabled={code.length === 6}
            /> */}
            {code ? (
              <TouchableOpacity onPress={delCode}>
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>

        <View style={styles.txtWrapper}>
          <TouchableOpacity onPress={goResend}>
            <Text style={[styles.txt, styles.txtLink]}>Resend Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goCall}>
            <Text style={[styles.txt, styles.txtLink, styles.txtMargin]}>
              Call Me Instead
            </Text>
          </TouchableOpacity>
        </View>
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
  txtNumber: {
    alignItems: 'center',
    fontSize: 16,
    color: '#222222',
  },
  txtLink: {
    color: '#222222',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  txtMargin: {
    marginLeft: 8,
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
  itemEnterWrong: {
    borderBottomColor: 'red',
  },
  inputCode: {
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderColor: 'gray',
  },
  inputCodeFocused: {
    borderColor: 'black',
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
