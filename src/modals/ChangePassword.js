import React from 'react';
import {View, Text, StyleSheet, Modal, ScrollView} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';

export default function ChangePassword({modalOpen, setModalOpen}) {
  const Schema = Yup.object().shape({
    oldPassword: Yup.mixed().required(),
    newPassword: Yup.mixed().required(),
    confirmPassword: Yup.mixed()
      .oneOf([Yup.ref('newPassword')], 'Password does not match')
      .required('Required'),
  });

  const submitting = (values) => {
    console.log(values);
    setModalOpen(false);
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <Formik
        initialValues={{phone: null}}
        validationSchema={Schema}
        onSubmit={(values) => submitting(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
          values,
        }) => {
          const {
            oldPassword: oldPasswordVal,
            newPassword: newPasswordVal,
            confirmPassword: confirmPasswordVal,
          } = values;
          const {
            oldPassword: oldPasswordTouch,
            newPassword: newPasswordTouch,
            confirmPassword: confirmPasswordTouch,
          } = touched;
          const {
            oldPassword: oldPasswordErr,
            newPassword: newPasswordErr,
            confirmPassword: confirmPasswordErr,
          } = errors;
          return (
            <View style={modalStyle.parent}>
              <ScrollView>
                <View style={modalStyle.header}>
                  <Text style={modalStyle.headerTxt}>Change phone number</Text>
                </View>

                <View style={modalStyle.formWrapper}>
                  <View style={modalStyle.oldPass}>
                    <Text style={modalStyle.text}>
                      Input your current password
                    </Text>
                    <FormFormat
                      inputName="oldPassword"
                      placeholder="Current Password"
                      value={oldPasswordVal}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      touched={oldPasswordTouch}
                      error={oldPasswordErr}
                      secureEntry={true}
                    />
                  </View>
                  <View style={modalStyle.newPass}>
                    <Text style={modalStyle.text}>Input your new password</Text>
                    <FormFormat
                      inputName="newPassword"
                      placeholder="New Password"
                      value={newPasswordVal}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      touched={newPasswordTouch}
                      error={newPasswordErr}
                      secureEntry={true}
                    />
                    <FormFormat
                      inputName="confirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPasswordVal}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                      touched={confirmPasswordTouch}
                      error={confirmPasswordErr}
                      secureEntry={true}
                    />
                  </View>
                </View>
              </ScrollView>
              <Button
                style={[
                  modalStyle.btn,
                  oldPasswordVal &&
                  !oldPasswordErr &&
                  newPasswordVal &&
                  !newPasswordErr &&
                  confirmPasswordVal &&
                  !confirmPasswordErr
                    ? modalStyle.active
                    : modalStyle.inactive,
                ]}
                disabled={
                  (!oldPasswordVal || Boolean(oldPasswordErr)) &&
                  (!newPasswordVal || Boolean(newPasswordErr)) &&
                  (!confirmPasswordVal || Boolean(confirmPasswordErr))
                }
                onPress={handleSubmit}
                title="Submit">
                <Text style={modalStyle.btnTxt}>NEXT</Text>
              </Button>
            </View>
          );
        }}
      </Formik>
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
  },
  headerTxt: {
    fontSize: 18,
    color: '#222',
  },
  formWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
  oldPass: {
    marginBottom: 40,
  },
  text: {
    marginLeft: '5%',
    color: '#222',
    fontSize: 14,
    marginBottom: 10,
  },
  active: {
    backgroundColor: '#56CF75',
  },
  inactive: {
    backgroundColor: '#999',
  },
  btn: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 0,
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
});
