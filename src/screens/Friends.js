import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'native-base';

export default function Calls() {
  // auto add friend
  const [autoAddFriend, setAutoAddFriend] = React.useState(false);
  React.useEffect(() => {
    console.log(autoAddFriend);
  }, [autoAddFriend]);

  // allow others add
  const [allowOthersAdd, setAllowOthersAdd] = React.useState(false);
  React.useEffect(() => {
    console.log(allowOthersAdd);
  }, [allowOthersAdd]);

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Friends</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Auto Add Friends</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={autoAddFriend}
              onPress={() => setAutoAddFriend(!autoAddFriend)}
            />
          </View>
        </View>

        <View style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Allow Others to Add</Text>
            <Text style={styles.subTitleCheckbox}>
              Those who have your phone number can add you as a friend
              automatically, when switched ON
            </Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={allowOthersAdd}
              onPress={() => setAllowOthersAdd(!allowOthersAdd)}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => console.log('oke')}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Hidden Users</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('oke')}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Blocked Users</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  header: {
    height: '10%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerTxt: {
    fontSize: 18,
    color: '#222',
  },
  buttonsContainer: {
    height: 'auto',
    width: '100%',
    paddingLeft: '5%',
  },
  buttonWrapper: {
    width: '100%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    paddingVertical: '5%',
  },
  buttonCheckbox: {
    width: '100%',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 14,
    color: '#222',
  },
  subTitle: {
    fontSize: 12,
    color: '#0066CC',
  },
  subTitleCheckbox: {
    fontSize: 12,
    color: '#999',
  },
  checkbox: {
    marginRight: '10%',
  },
  textWrapper: {
    width: '80%',
  },
});
