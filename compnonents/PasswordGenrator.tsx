import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import * as Yup from 'yup';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Formik} from 'formik';

function PasswordGenrator() {
  const [password, SetIsPassword] = useState('');
  const [isPasswordGnerated, setIsPasswordGenrateds] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  // console.log("66666666",lowerCase);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePassword = (passwordLength: number) => {
    let charcterList = '';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
    const digit = '0123456789';
    const specialcharcs = '!@#$%^&*()_+';

    if (lowerCase) {
      charcterList += lowercasechars;
    }
    if (uppercase) {
      charcterList += uppercasechars;
    }
    if (number) {
      charcterList += digit;
    }
    if (symbol) {
      charcterList += specialcharcs;
    }

    const passwordResult = createPassword(charcterList, passwordLength);
    SetIsPassword(passwordResult);
    setIsPasswordGenrateds(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charcterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charcterIndex);
    }
    return result;
  };

  const passwordScheme = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Password must be at least 4 characters')
      .max(20, 'Password must be at most 20 characters')
      .required('Password is required'),
  });

  const resetpassword = () => {
    SetIsPassword('');
    setIsPasswordGenrateds(false);
    setLowerCase(true);
    setUppercase(false);
    setNumber(false);
    setSymbol(false);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordScheme}
            onSubmit={values => {
              console.log('=-=-=--=>>>>', values);
              generatePassword(Number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lower Case</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                    size={20}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Upper Case</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#29AB87"
                    size={20}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="#29AB87"
                    size={20}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Special Charcters</Text>
                  <BouncyCheckbox
                    isChecked={symbol}
                    onPress={() => setSymbol(!symbol)}
                    fillColor="#29AB87"
                    size={20}
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}>
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetpassword();
                    }}>
                    <Text>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      {isPasswordGnerated ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.newPassword}>
            {password}
        </Text>
        </View>
      ) : (null)}
            
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  passwordContainer:{
    alignItems: 'center',
    marginTop: 12,
  },
  newPassword:{
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#9400d3',
    fontWeight: '700',
  }
});

export default PasswordGenrator;
