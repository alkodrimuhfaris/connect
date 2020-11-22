import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import ModalCenter from './ModalCenter';
import DeleteEmail from '../components/DeleteEmail';

export default function PreChangePhone({
  modalOpen,
  setModalOpen,
  setModalNext,
  emailAddress,
}) {
  const [openDelete, setOpenDelete] = React.useState(false);

  const modalNext = () => {
    setModalNext(true);
  };

  return (
    <Modal
      onRequestClose={setModalOpen}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      {/* modal delete email */}
      <ModalCenter
        modalOpen={openDelete}
        setModalOpen={setOpenDelete}
        modalContent={<DeleteEmail setModalOpen={setOpenDelete} />}
      />
      <View style={modalStyle.parent}>
        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTxt}>Email</Text>
        </View>
        <View style={modalStyle.buttonsContainer}>
          <View style={modalStyle.buttonWrapper}>
            <Text style={[modalStyle.title, modalStyle.email]}>
              {emailAddress}
            </Text>
          </View>
          <TouchableOpacity
            onPress={modalNext}
            style={modalStyle.buttonWrapper}>
            <Text style={modalStyle.title}>Change your email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpenDelete(true)}
            style={modalStyle.buttonWrapper}>
            <Text style={modalStyle.title}>Remove email</Text>
          </TouchableOpacity>
        </View>
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
  email: {
    color: '#999',
  },
});
