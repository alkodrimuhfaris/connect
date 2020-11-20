import {CheckBox} from 'native-base';
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

export default function CreateNew() {
  const [autoAdd, setAutoAdd] = React.useState(false);
  const [allowOthers, setAllowOthers] = React.useState(false);

  const navigation = useNavigation();

  const goNext = () => {
    navigation.navigate('MainStack', {screen: 'MainScreen'});
    console.log(autoAdd);
    console.log(allowOthers);
    console.log('go next');
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFDFD" />
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Start adding friends!</Text>
        </View>

        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>
            CONNECT can access your phone number and contacts to help you find
            CONNECT friends. Tap either setting for more details
          </Text>
        </View>

        <View style={styles.checkboxWrapper}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              color="#56CF75"
              checked={autoAdd}
              onPress={() => setAutoAdd(!autoAdd)}
            />
            <Text style={styles.txtCheckbox}>Auto-add friends</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              color="#56CF75"
              checked={allowOthers}
              onPress={() => setAllowOthers(!allowOthers)}
            />
            <Text style={styles.txtCheckbox}>Allow others to add me</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={goNext}
          style={[styles.btn, styles.btnActive]}>
          <AntDesign name="arrowright" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  checkboxWrapper: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: '5%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  txtCheckbox: {
    fontSize: 16,
    color: '#222',
    marginLeft: 20,
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
