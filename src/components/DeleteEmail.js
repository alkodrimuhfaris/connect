import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function DeleteEmail({setModalOpen}) {
  const cancel = () => {
    setModalOpen(false);
  };

  const proceed = () => {
    setModalOpen(false);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={contents.parent}>
        <View style={contents.textWrapper}>
          <Text style={contents.content}>
            Do you want to cancel your registration?
          </Text>
          <Text style={contents.content}>Are you sure want to proceed?</Text>
        </View>
        <View style={contents.buttonWrapper}>
          <TouchableOpacity onPress={cancel} style={contents.btn}>
            <Text style={contents.btnNo}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={proceed} style={contents.btn}>
            <Text style={contents.btnYes}>Yes</Text>
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
