import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function ContentDelete({
  setModalOpen,
  setOk = (val) => val,
  setCancel = (val) => val,
  contentUpper = '',
  contentLower = '',
  okText = 'Yes',
  cancelText = 'Cancel',
}) {
  const cancel = () => {
    setModalOpen(false);
    setCancel;
  };

  const proceed = () => {
    setModalOpen(false);
    setOk;
  };

  return (
    <TouchableWithoutFeedback>
      <View style={contents.parent}>
        <View style={contents.textWrapper}>
          <Text style={contents.content}>{contentUpper}</Text>
          <Text style={contents.content}>{contentLower}</Text>
        </View>
        <View style={contents.buttonWrapper}>
          <TouchableOpacity onPress={cancel} style={contents.btn}>
            <Text style={contents.btnNo}>{cancelText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={proceed} style={contents.btn}>
            <Text style={contents.btnYes}>{okText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const contents = StyleSheet.create({
  parent: {
    width: '70%',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textWrapper: {
    width: '100%',
    padding: '5%',
  },
  content: {
    color: '#999',
    fontSize: 14,
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    padding: '5%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYes: {
    color: 'red',
    fontSize: 14,
  },
  btnNo: {
    color: '#222',
    fontSize: 14,
  },
});
