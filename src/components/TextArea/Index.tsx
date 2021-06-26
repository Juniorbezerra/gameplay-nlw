import React from 'react';
import { TextInputProps } from 'react-native';
import {  Input } from './styles';

export function TextArea({...rest}:TextInputProps ){
  return (<Input style={{textAlignVertical: 'top'}} {...rest}/>)
}