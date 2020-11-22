import {Form, Textarea, Item} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default function FormFormat({
  inputName,
  handleChange,
  handleBlur,
  setFieldValue,
  error,
  touched,
  value,
  placeholder,
  keyboardType = 'default',
  secureEntry = false,
  textCounter = false,
  maxLength = 20,
}) {
  return (
    <Form style={styles.form}>
      <Item
        style={
          touched ? (error ? styles.itemEnterError : styles.itemEnter) : null
        }>
        <Textarea
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureEntry}
          keyboardType={keyboardType}
          style={styles.input}
          onChangeText={handleChange(inputName)}
          onBlur={handleBlur ? handleBlur(inputName) : undefined}
        />
        {value ? (
          <TouchableOpacity onPress={() => setFieldValue(inputName, '')}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        ) : null}
      </Item>
      {error && touched ? (
        <View style={styles.txtWrapper}>
          <Text style={styles.txtError}>{error}</Text>
        </View>
      ) : null}
      {textCounter ? (
        <View style={styles.txtWrapper}>
          <Text
            style={[
              styles.txtCount,
              error && touched ? styles.txtError : null,
            ]}>{`${maxLength - value.length}/${maxLength}`}</Text>
        </View>
      ) : null}
    </Form>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    paddingRight: '5%',
    marginVertical: 5,
  },
  input: {
    width: '100%',
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  itemEnterError: {
    borderBottomColor: 'red',
  },
  txtWrapper: {
    marginTop: 5,
    width: '100%',
    paddingLeft: '5%',
  },
  txtError: {
    fontSize: 14,
    color: 'red',
  },
  txtCount: {
    fontSize: 14,
    color: '#999',
  },
});
