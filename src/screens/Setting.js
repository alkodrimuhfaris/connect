import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Ionicons} from '@expo/vector-icons';

const data = [
  {
    name: 'Syamsul Bahari',
    avatar:
      'https://cdn-2.tstatic.net/cirebon/foto/bank/images/spiderman-homecoming.jpg',
    idName: 'syamsulbahari',
  },
];

const settingData = [
  {
    title: 'Profile',
    icon: 'ios-person',
    navigate: 'Profile',
  },
  {
    title: 'Accounts',
    icon: 'ios-settings',
    navigate: 'Account',
  },
  {
    title: 'Notifications',
    icon: 'ios-notifications',
    navigate: 'Profile',
  },
  {
    title: 'Chats',
    icon: 'ios-chatboxes',
    navigate: 'Profile',
  },
  {
    title: 'Calls',
    icon: 'ios-call',
    navigate: 'Profile',
  },
  {
    title: 'Friends',
    icon: 'ios-people',
    navigate: 'Profile',
  },
];

function SelectorSetting({item}) {
  const {item: selectorData} = item;
  const {title, icon, navigate} = selectorData;
  const navigation = useNavigation();
  const goToScreen = () => {
    navigation.navigate(navigate);
  };
  return (
    <TouchableOpacity onPress={goToScreen} style={selector.parent}>
      <View style={selector.iconWrapper}>
        <Ionicons name={icon} style={selector.icon} size={25} color="#666" />
      </View>
      <Text style={selector.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const selector = StyleSheet.create({
  parent: {
    marginVertical: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '15%',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    marginRight: 10,
  },
  title: {
    flex: 1,
    color: '#666',
    fontSize: 16,
  },
});

export default function Setting() {
  const navigation = useNavigation();
  const [userData] = data;
  const settingItem = settingData;

  const goToProfile = () => {
    navigation.navigate('Profile')
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <TouchableOpacity onPress={goToProfile} style={styles.photoWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{uri: userData.avatar}} style={styles.avatar} />
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{userData.name}</Text>
          <View style={styles.idNameWrapper}>
            <Text style={styles.idNameKey}>User ID: </Text>
            <Text style={styles.idNameVal}>{userData.idName}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.optionWrapper}>
        <FlatList
          data={settingItem}
          renderItem={(item) => {
            return <SelectorSetting item={item} />;
          }}
        />
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
  photoWrapper: {
    flexDirection: 'row',
    width: '100%',
    padding: '5%',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  avatarWrapper: {
    width: '25%',
    alignItems: 'center',
    alignContent: 'center',
  },
  avatar: {
    width: '100%',
    borderRadius: 300,
    aspectRatio: 1 / 1,
  },
  nameWrapper: {
    padding: '5%',
  },
  name: {
    color: '#222',
    fontSize: 24,
  },
  idNameWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  idNameKey: {
    color: '#777',
  },
  idNameVal: {
    color: '#333',
  },
  optionWrapper: {
    width: '100%',
    paddingHorizontal: '5%',
  },
});
