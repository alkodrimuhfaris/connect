import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'native-base';

export default function Calls() {
  const [allowVoiceCall, setAllowVoiceCall] = React.useState(false);
  React.useEffect(() => {
    console.log(allowVoiceCall);
  }, [allowVoiceCall]);

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Calls</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Allow voice calls</Text>
            <Text style={styles.subTitleCheckbox}>
              Disable this setting to reject calls and stop recieving missed
              call notifications
            </Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={allowVoiceCall}
              onPress={() => setAllowVoiceCall(!allowVoiceCall)}
            />
          </View>
        </View>
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
