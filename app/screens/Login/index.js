import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';

const Login = () => {
  const id = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Test Start Page</Text>
    </View>
  );
};

export default Login;
