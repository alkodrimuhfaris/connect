import {Form, Input, Item} from 'native-base';
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

export default function CreatePassword() {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const navigation = useNavigation();

  const delPassword = () => {
    setPassword('');
  };

  const delConfirmPassword = () => {
    setConfirmPassword('');
  };

  const goNext = () => {
    navigation.navigate('AddFriends');
    console.log(password);
    console.log(confirmPassword);
    console.log(
      !(password && confirmPassword) && !(password === confirmPassword),
    );
    console.log('go next');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Create password</Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            Use at least one letter, one number, and four other characters.
          </Text>
        </View>

        <Form style={styles.form}>
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
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
          <Item style={confirmPassword ? styles.itemEnter : null}>
            <Input
              placeholder="Confirm password"
              secureTextEntry
              value={confirmPassword}
              style={styles.input}
              onChangeText={(e) => setConfirmPassword(e)}
            />
            {confirmPassword ? (
              <TouchableOpacity onPress={delConfirmPassword}>
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={
            !(password && confirmPassword) || !(password === confirmPassword)
          }
          onPress={goNext}
          style={[
            styles.btn,
            !(password && confirmPassword) || !(password === confirmPassword)
              ? null
              : styles.btnActive,
          ]}>
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
  photoContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: '5%',
  },
  photoWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'relative',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
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
