import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';

export default function ChangePhone({modalOpen, setModalOpen, setModalBefore}) {
  const Schema = Yup.object().shape({
    phone: Yup.number().required(),
  });

  const submitting = (values) => {
    console.log(values);
    setModalBefore(false);
    setModalOpen(false);
  };

  const goToTOC = () => {
    console.log('go to TOC');
  };

  const goToPrivacyPolicy = () => {
    console.log('go to privacy policy');
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
          const {phone: phoneVal} = values;
          const {phone: phoneTouch} = touched;
          const {phone: phoneErr} = errors;
          return (
            <View style={modalStyle.parent}>
              <View style={modalStyle.header}>
                <Text style={modalStyle.headerTxt}>Change phone number</Text>
              </View>

              <View style={modalStyle.formWrapper}>
                <View style={modalStyle.countryWrapper}>
                  <Text style={modalStyle.country}>Indonesia</Text>
                </View>
                <FormFormat
                  inputName="phone"
                  placeholder="Phone Number"
                  value={phoneVal}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  touched={phoneTouch}
                  error={phoneErr}
                  keyboardType="numeric"
                />

                <View style={modalStyle.txtWrapper}>
                  <Text style={modalStyle.txt}>
                    You must verify your new phone to change your registered
                    one. By tapping Next, you agree to CONNECT's{' '}
                  </Text>
                  <TouchableOpacity onPress={goToTOC}>
                    <Text style={[modalStyle.txt, modalStyle.txtLink]}>
                      Terms and Condition of Use
                    </Text>
                  </TouchableOpacity>
                  <Text style={modalStyle.txt}> and </Text>
                  <TouchableOpacity onPress={goToPrivacyPolicy}>
                    <Text style={[modalStyle.txt, modalStyle.txtLink]}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Button
                style={[
                  modalStyle.btn,
                  phoneVal && !phoneErr
                    ? modalStyle.active
                    : modalStyle.inactive,
                ]}
                disabled={!phoneVal || Boolean(phoneErr)}
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
  countryWrapper: {
    paddingLeft: '5%',
  },
  country: {
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
    fontSize: 16,
    color: '#D2D2D2',
  },
  txtLink: {
    color: '#56CF75',
    textDecorationLine: 'underline',
  },
  content: {
    width: 'auto',
    height: 'auto',
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
