import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';
import {useSelector} from 'react-redux';

export default function ChangeUserID({modalOpen, setModalOpen, updateProfile}) {
  const {isError} = useSelector((state) => state.profile);
  const SignupSchema = Yup.object().shape({
    idName: Yup.string().required().max(20),
  });

  const submitting = (values) => {
    console.log(values);
    updateProfile(values);
    if (!isError) {
      setModalOpen(false);
    }
  };

  return (
    <Modal
      onRequestClose={() => setModalOpen(false)}
      animationType="slide"
      transparent={true}
      visible={modalOpen}>
      <Formik
        initialValues={{idName: ''}}
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
          const {idName: idNameVal} = values;
          const {idName: idNameTouch} = touched;
          const {idName: idNameErr} = errors;
          return (
            <View style={modalStyle.parent}>
              <View style={modalStyle.header}>
                <Text style={modalStyle.headerTxt}>Change User ID</Text>
              </View>
              <View style={modalStyle.formWrapper}>
                <FormFormat
                  inputName="idName"
                  placeholder="User ID"
                  value={idNameVal}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  touched={idNameTouch}
                  error={idNameErr}
                  textCounter={true}
                  maxLength={20}
                />
              </View>
              <Button
                style={[
                  modalStyle.btn,
                  idNameVal && !idNameErr
                    ? modalStyle.active
                    : modalStyle.inactive,
                ]}
                disabled={!idNameVal || Boolean(idNameErr)}
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
