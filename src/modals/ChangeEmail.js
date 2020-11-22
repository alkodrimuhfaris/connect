import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';

export default function ChangeEmail({modalOpen, setModalOpen, setModalBefore}) {
  const Schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const submitting = (values) => {
    console.log(values);
    setModalBefore(false);
    setModalOpen(false);
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <Formik
        initialValues={{email: null}}
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
          const {email: emailVal} = values;
          const {email: emailTouch} = touched;
          const {email: emailErr} = errors;
          return (
            <View style={modalStyle.parent}>
              <View style={modalStyle.header}>
                <Text style={modalStyle.headerTxt}>Email Registration</Text>
              </View>

              <View style={modalStyle.formWrapper}>
                <FormFormat
                  inputName="email"
                  placeholder="Email Address"
                  value={emailVal}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  touched={emailTouch}
                  error={emailErr}
                />

                <View style={modalStyle.txtWrapper}>
                  <Text style={modalStyle.txt}>
                    Register an email address to keep all of your account data
                    backed up. If you switch devices or phone numbers, you'll be
                    able to restore your friends, groups, profile info, and
                    more. You can also use the PC version of LINE
                  </Text>
                </View>
              </View>
              <Button
                style={[
                  modalStyle.btn,
                  emailVal && !emailErr
                    ? modalStyle.active
                    : modalStyle.inactive,
                ]}
                disabled={!emailVal || Boolean(emailErr)}
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
  txtWrapper: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  txt: {
    alignItems: 'center',
    fontSize: 14,
    color: '#D2D2D2',
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
