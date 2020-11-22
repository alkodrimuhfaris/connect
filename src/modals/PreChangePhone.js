import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';

export default function PreChangePhone({
  modalOpen,
  setModalOpen,
  setModalNext,
  phoneNumber,
}) {
  const modalNext = () => {
    setModalNext(true);
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <View style={modalStyle.parent}>
        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTxt}>Change phone number </Text>
        </View>

        <View style={modalStyle.txtWrapper}>
          <Text style={modalStyle.txtUp}>Registered phone number:</Text>
          <View style={modalStyle.numberWrapper}>
            <Text style={[modalStyle.number, modalStyle.txtLink]}>
              {phoneNumber}
            </Text>
          </View>
          <Text style={modalStyle.txtBottom}>
            This changes the phone number you have registered in CONNECT. Tap
            the button bellow to continue
          </Text>
        </View>
        <Button onPress={modalNext} style={[modalStyle.btn, modalStyle.active]}>
          <Text style={modalStyle.btnTxt}>NEXT</Text>
        </Button>
      </View>
    </Modal>
  );
}

const modalStyle = StyleSheet.create({
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
  txtWrapper: {
    marginVertical: 10,
    width: '100%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: '15%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  txtUp: {
    textAlign: 'center',
    fontSize: 16,
    color: '#222',
  },
  numberWrapper: {
    marginVertical: 20,
  },
  number: {
    color: '#56CF75',
    fontSize: 30,
    textAlign: 'center',
  },
  txtBottom: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  },
  active: {
    backgroundColor: '#56CF75',
  },
  inactive: {
    backgroundColor: '#999',
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});
