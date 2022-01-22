import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/StatusBar';

export default ({state, setState}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return <></>;
};
