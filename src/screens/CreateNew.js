/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Entypo, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import picturePlaceholder from '../assets/photos/profilePlaceholder.png';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormFormat from '../components/FormFormat';
import profileAction from '../redux/actions/profile';
import {useSelector, useDispatch} from 'react-redux';
import ModalCenter from '../modals/ModalCenter';
import ContentSelector from '../components/ContentSelector';

export default function CreateNew() {
  const dispatch = useDispatch();
  const {isEdited} = useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);
  const [avatar, setAvatar] = React.useState('');
  const [modalOption, setModalOption] = React.useState(false);
  const navigation = useNavigation();
  const Schema = Yup.object().shape({
    name: Yup.string().required().max(20),
  });

  React.useEffect(() => {
    if (isEdited) {
      navigation.navigate('CreatePassword');
      console.log('go next');
    }
  }, [isEdited]);

  const submitting = (values) => {
    console.log(values);
    dispatch(profileAction.patchProfile(token, values));
  };

  const selectOption = ['Open Galery', 'Open Camera'];

  const selectAction = (index) => {
    if (index === 0) {
      console.log('open galery');
      setModalOption(false);
    } else if (index === 1) {
      console.log('open camera');
      setModalOption(false);
    }
  };

  return (
    <Formik
      initialValues={{name: ''}}
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
        const {name: nameVal} = values;
        const {name: nameTouch} = touched;
        const {name: nameErr} = errors;
        return (
          <SafeAreaView style={styles.parent}>
            {/* select camera or gallery */}
            <ModalCenter
              modalOpen={modalOption}
              setModalOpen={setModalOption}
              modalContent={
                <ContentSelector
                  sortOption={selectOption}
                  setOption={selectAction}
                />
              }
            />
            <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
            <View style={styles.top}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>Create a new account</Text>
              </View>

              <View style={styles.txtWrapper}>
                <Text style={styles.txt}>
                  Other people on CONNECT can see your display nameand profile
                  media
                </Text>
              </View>

              <View style={styles.photoContainer}>
                <TouchableOpacity
                  onPress={() => setModalOption(true)}
                  style={styles.photoWrapper}>
                  <Image
                    source={avatar ? picturePlaceholder : picturePlaceholder}
                    style={styles.photo}
                  />
                  <View style={styles.iconWrapper}>
                    <Entypo name="camera" size={10} color="black" />
                  </View>
                </TouchableOpacity>
              </View>

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

            <View style={styles.bottom}>
              <TouchableOpacity
                disabled={!nameVal}
                onPress={handleSubmit}
                style={[styles.btn, nameVal ? styles.btnActive : null]}>
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
