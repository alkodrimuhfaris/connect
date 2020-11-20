import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation} from '@react-navigation/native';

export default function AlreadyHave() {
  const navigation = useNavigation();

  const goTransfer = () => {
    console.log('go transfer');
    navigation.navigate('MainStack', {screen: 'MainScreen'});
  };

  const goCreateNew = () => {
    console.log('create new');
    navigation.navigate('CreateNew');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Already have an account?</Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            If you have an account on another device, you can transfer it to
            this device using the account's registered phone number or email
            address
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={goTransfer} style={[styles.btn]}>
          <Text style={[styles.btnTxt, styles.btnTransferTxt]}>
            Yes, transfer my account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goCreateNew}
          style={[styles.btn, styles.btnCreateNew]}>
          <Text style={styles.btnTxt}>No, create a new account</Text>
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
    textAlign: 'left',
    fontSize: 16,
    color: '#D2D2D2',
  },
  bottom: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#56CF75',
    width: '100%',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  btnCreateNew: {
    backgroundColor: 'white',
  },
  btnTxt: {
    fontSize: 18,
  },
  btnTransferTxt: {
    color: 'white',
    fontSize: 18,
  },
});
