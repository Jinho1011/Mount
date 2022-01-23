import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import PlanEditorPresenter from './PlanEditorPresenter';

export default ({navigation, route}) => {
  return <PlanEditorPresenter />;
};
