import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';

export default function ChangeName({modalOpen, setModalOpen}) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required().max(20),
  });

  const submitting = (values) => {
    console.log(values);
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <Formik
        initialValues={{name: ''}}
        validationSchema={SignupSchema}
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
          const {name: nameVal} = values;
          const {name: nameTouch} = touched;
          const {name: nameErr} = errors;
          return (
            <View style={modalStyle.parent}>
              <View style={modalStyle.header}>
                <Text style={modalStyle.headerTxt}>Display Name</Text>
              </View>
              <View style={modalStyle.formWrapper}>
                <FormFormat
                  inputName="name"
                  placeholder="Name"
                  value={nameVal}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  touched={nameTouch}
                  error={nameErr}
                  textCounter={true}
                  maxLength={20}
                />
              </View>
              <Button
                style={[
                  modalStyle.btn,
                  nameVal && !nameErr ? modalStyle.active : modalStyle.inactive,
                ]}
                disabled={!nameVal || Boolean(nameErr)}
                onPress={handleSubmit}
                title="Submit">
                <Text style={modalStyle.btnTxt}>OK</Text>
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
