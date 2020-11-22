import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import TextAreaFormat from '../components/TextAreaFormat';

export default function ChangeStatus({modalOpen, setModalOpen}) {
  const SignupSchema = Yup.object().shape({
    status: Yup.string().max(500),
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
        initialValues={{status: ''}}
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
          const {status: statusVal} = values;
          const {status: statusTouch} = touched;
          const {status: statusErr} = errors;
          return (
            <View style={modalStyle.parent}>
              <View style={modalStyle.header}>
                <Text style={modalStyle.headerTxt}>Status Message</Text>
              </View>
              <View style={modalStyle.formWrapper}>
                <TextAreaFormat
                  inputName="status"
                  placeholder="Status"
                  value={statusVal}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  touched={statusTouch}
                  error={statusErr}
                  textCounter={true}
                  maxLength={500}
                />
              </View>
              <Button
                style={[
                  modalStyle.btn,
                  statusVal && !statusErr
                    ? modalStyle.active
                    : modalStyle.inactive,
                ]}
                disabled={!statusVal || Boolean(statusErr)}
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
