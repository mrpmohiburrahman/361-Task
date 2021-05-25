import React,{useEffect} from 'react';
import { View,StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { navigationRef } from '../../navigation/NavigationService';

const Login = (props) => {
  const id = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();
  const {navigation}=props
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Onboarding')
    },1000)
  },[])
  return (
    <View style={styles.container}>
      <Text>Test Start Page</Text>
    </View>
  );
};

export default Login;
