import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'native-base';

export default function Notifications() {
  const [notifications, setNotifications] = React.useState(false);
  const [msgPreviews, setMsgPreviews] = React.useState(false);
  const [mentions, setMentions] = React.useState(false);

  const openSystemNotif = () => {
    console.log('open system notification');
  };

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Notifications</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Allow Others to Add by ID</Text>
            <Text style={styles.subTitleCheckbox}>Notifications</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={notifications}
              onPress={() => setNotifications(!notifications)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={openSystemNotif}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Remove email</Text>
          <Text style={styles.subTitle}>On</Text>
        </TouchableOpacity>
        <View style={styles.textBorderWrapper}>
          <Text style={styles.subTitleCheckbox}>
            {notifications
              ? 'Force the app may cause notifications to arrive late or not be delivered'
              : 'Enable notifications here and in notification settings to get notifications.'}
          </Text>
        </View>

        {notifications ? (
          <View>
            <View style={styles.buttonCheckbox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Message previews</Text>
                <Text style={styles.subTitleCheckbox}>
                  You can view messages via notifications
                </Text>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  color="#56CF75"
                  checked={msgPreviews}
                  onPress={() => setMsgPreviews(!msgPreviews)}
                />
              </View>
            </View>
            <View style={styles.buttonCheckbox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Mentions</Text>
                <Text style={styles.subTitleCheckbox}>
                  Get notified whenever you are mentioned in chats, even if chat
                  notifications are turned off
                </Text>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  color="#56CF75"
                  checked={mentions}
                  onPress={() => setMentions(!mentions)}
                />
              </View>
            </View>
          </View>
        ) : null}
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
  textWrapper: {
    width: '80%',
  },
  title: {
    fontSize: 14,
    color: '#222',
  },
  subTitle: {
    fontSize: 12,
    color: '#0066CC',
  },
  textBorderWrapper: {
    width: '80%',
    paddingVertical: '5%',
  },
  subTitleCheckbox: {
    fontSize: 12,
    color: '#999',
  },
  checkbox: {
    marginRight: '10%',
  },
});
