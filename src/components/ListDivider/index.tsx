import React from 'react';

import { Container } from './styles';

interface Props {
  isCentered?: boolean;
}

export function ListDivider({isCentered}: Props){
  return (
    <Container isCentered={isCentered} />
  );
}