import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../assets/logo/logo.png';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const goToEmail = () => {
    navigation.navigate('LoginEmail');
    console.log('to email');
  };

  const goToQR = () => {
    console.log('to QR');
  };

  const goToRegister = () => {
    navigation.navigate('Register', {screen: 'InputPhone'});
    console.log('go to register');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="light-content" backgroundColor="#4CC16A" />
      <View style={styles.topWrapper}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subTitle}>
            Try CONNECT - streamlined and faster than ever!
          </Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={goToRegister} style={styles.btn}>
          <Text style={styles.btnTxt}>Start</Text>
        </TouchableOpacity>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>Log in with </Text>
          <TouchableOpacity style={styles.txtInLineWrapper} onPress={goToEmail}>
            <Text style={styles.txt}>email address</Text>
          </TouchableOpacity>
          <Text style={styles.txt}> or </Text>
          <TouchableOpacity style={styles.txtInLineWrapper} onPress={goToQR}>
            <Text style={styles.txt}>QR code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#56CF75',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topWrapper: {
    width: '100%',
    marginTop: '20%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    width: '30%',
    height: undefined,
    aspectRatio: 441 / 669,
    marginBottom: 20,
  },
  titleWrapper: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  subTitle: {
    marginTop: 10,
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)',
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  btnTxt: {
    color: '#56CF75',
    fontSize: 16,
  },
  txtWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txt: {
    fontSize: 16,
    color: 'white',
  },
});
