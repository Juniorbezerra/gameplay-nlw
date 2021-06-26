import React from 'react';
import { TextInputProps } from 'react-native';
import {  Input } from './styles';

export function SmallInput({...rest}:TextInputProps ){
  return (
    <Input {...rest}
      keyboardType="numeric"
    />
  )
}