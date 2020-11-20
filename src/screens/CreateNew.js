import {Form, Input, Item, Label} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Entypo, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import picturePlaceholder from '../assets/photos/profilePlaceholder.png';

export default function CreateNew() {
  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const navigation = useNavigation();

  const delName = () => {
    setName('');
  };

  const goNext = () => {
    navigation.navigate('CreatePassword');
    console.log('go next');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Create a new account</Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            Other people on CONNECT can see your display nameand profile media
          </Text>
        </View>

        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoWrapper}>
            <Image
              source={avatar ? picturePlaceholder : picturePlaceholder}
              style={styles.photo}
            />
            <View style={styles.iconWrapper}>
              <Entypo name="camera" size={10} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <Form style={styles.form}>
          <Item style={name ? styles.itemEnter : null}>
            <Input
              placeholder="What's your name?"
              value={name}
              style={styles.input}
              onChangeText={(e) => setName(e)}
            />
            {name ? (
              <TouchableOpacity onPress={delName}>
                <Entypo name="cross" size={20} color="black" />
              </TouchableOpacity>
            ) : null}
          </Item>
        </Form>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={!name}
          onPress={goNext}
          style={[styles.btn, name ? styles.btnActive : null]}>
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
