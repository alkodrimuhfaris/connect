import {Form, Input, Item} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
}) {
  return (
    <Form style={styles.form}>
      <Item
        style={
          touched ? (error ? styles.itemEnterError : styles.itemEnter) : null
        }>
        <Input
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
      {error && touched ? <Text style={styles.txtError}>{error}</Text> : null}
    </Form>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    paddingRight: '5%',
    marginVertical: 5,
  },
  itemEnter: {
    borderBottomColor: '#56CF75',
  },
  itemEnterError: {
    borderBottomColor: 'red',
  },
  txtError: {
    width: '100%',
    paddingLeft: '5%',
    color: 'red',
  },
});
