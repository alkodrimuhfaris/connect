/* eslint-disable react-hooks/exhaustive-deps */
import {Form, Input, Item} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Entypo, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';
import passwordAction from '../redux/actions/password';
import {useSelector, useDispatch} from 'react-redux';

export default function CreatePassword() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const {isSuccess} = useSelector((state) => state.password);
  const Schema = Yup.object().shape({
    newPassword: Yup.mixed().required(),
    confirmPassword: Yup.mixed()
      .oneOf([Yup.ref('newPassword')], 'Password does not match')
      .required('Required'),
  });

  React.useEffect(() => {
    if (isSuccess) {
      navigation.navigate('AddFriends');
    }
  }, [isSuccess]);

  const submitting = (values) => {
    console.log(values);
    dispatch(passwordAction.addPassword(token, values));
  };

  return (
    <Formik
      initialValues={{newPassword: '', confirmPassword: ''}}
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
          newPassword: newPasswordVal,
          confirmPassword: confirmPasswordVal,
        } = values;
        const {
          newPassword: newPasswordTouch,
          confirmPassword: confirmPasswordTouch,
        } = touched;
        const {
          newPassword: newPasswordErr,
          confirmPassword: confirmPasswordErr,
        } = errors;
        return (
          <SafeAreaView style={styles.parent}>
            <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
            <View style={styles.top}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>Create password</Text>
              </View>

              <View style={styles.txtWrapper}>
                <Text style={styles.txt}>
                  Use at least one letter, one number, and four other
                  characters.
                </Text>
              </View>

              <FormFormat
                inputName="newPassword"
                placeholder="Password"
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

            <View style={styles.bottom}>
              <TouchableOpacity
                disabled={
                  (!newPasswordVal || Boolean(newPasswordErr)) &&
                  (!confirmPasswordVal || Boolean(confirmPasswordErr))
                }
                onPress={handleSubmit}
                style={[
                  styles.btn,
                  newPasswordVal &&
                  !newPasswordErr &&
                  confirmPasswordVal &&
                  !confirmPasswordErr
                    ? styles.btnActive
                    : null,
                ]}>
                <AntDesign name="arrowright" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  top: {
    marginTop: '10%',
    width: '100%',
  },
  titleWrapper: {
    marginBottom: 10,
    width: '100%',
    padding: '5%',
  },
  title: {
    fontSize: 28,
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
  photoContainer: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: '5%',
  },
  photoWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'relative',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLink: {
    color: '#56CF75',
    textDecorationLine: 'underline',
  },
  countrySelector: {
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  country: {
    fontSize: 18,
  },
  form: {
    marginVertical: 10,
    alignItems: 'center',
    paddingRight: '5%',
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  labelStyle: {
    color: 'black',
  },
  bottom: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnActive: {
    backgroundColor: '#56CF75',
  },
  btn: {
    backgroundColor: '#D2D2D2',
    width: 50,
    height: 50,
    borderRadius: 70,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
