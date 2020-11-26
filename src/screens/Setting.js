/* eslint-disable react-hooks/exhaustive-deps */
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
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';
import authAction from '../redux/actions/auth';
import passwordAction from '../redux/actions/password';
import placeholder from '../assets/photos/profilePlaceholder.png';

const {EXPO_API_URL} = process.env;

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
    navigate: 'Notifications',
  },
  {
    title: 'Chats',
    icon: 'ios-chatboxes',
    navigate: 'Chats',
  },
  {
    title: 'Calls',
    icon: 'ios-call',
    navigate: 'Calls',
  },
  {
    title: 'Friends',
    icon: 'ios-people',
    navigate: 'Friends',
  },
  {
    title: 'Log Out',
    icon: 'ios-log-out',
    logout: true,
    navigate: 'AuthStack',
  },
];

function SelectorSetting({item}) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.authState);
  const {item: selectorData} = item;
  const {title, icon, navigate, logout} = selectorData;
  const [logoutClick, setLogoutClick] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (logoutClick && authState) {
      navigation.navigate(navigate);
    }
  }, [authState, logoutClick]);

  const goToScreen = () => {
    if (logout) {
      dispatch(authAction.logout());
      dispatch(profileAction.logout());
      dispatch(passwordAction.logout());
      setLogoutClick(true);
    } else {
      navigation.navigate(navigate);
    }
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
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.profile.myProfile);
  const {token, id: myId} = useSelector((state) => state.auth);
  const settingItem = settingData;

  React.useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, []);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <TouchableOpacity onPress={goToProfile} style={styles.photoWrapper}>
        <View style={styles.avatarWrapper}>
          <Image
            source={
              userData.ava ? {uri: EXPO_API_URL + userData.ava} : placeholder
            }
            style={styles.avatar}
          />
        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>
            {userData.name ? userData.name : 'Not Set'}
          </Text>
          <View style={styles.idNameWrapper}>
            <Text style={styles.idNameKey}>User ID: </Text>
            <Text style={styles.idNameVal}>
              {userData.idName ? userData.idName : 'Not Set'}
            </Text>
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
    width: 80,
    height: 80,
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
