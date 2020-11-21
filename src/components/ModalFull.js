import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from './FormFormat';

export default function ModalCenter({
  modalOpen,
  setModalOpen,
  submitForm = (values) => console.log(values),
  modalContent = <Text>This is your modal</Text>,
}) {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required(),
  });

  const submitting = (values) => {
    console.log(values);
    submitForm(values);
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <Formik
        initialValues={{email: '', name: ''}}
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
        }) => (
          <View style={modalStyle.parent}>
            <FormFormat
              inputName="email"
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              touched={touched.email}
              error={errors.email}
            />
            <Button
              style={modalStyle.btn}
              onPress={handleSubmit}
              title="Submit">
              <Text style={modalStyle.btnTxt}>OK</Text>
            </Button>
          </View>
        )}
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
  content: {
    width: 'auto',
    height: 'auto',
  },
  btn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
