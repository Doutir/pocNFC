import React from 'react';
import * as S from './styles';

const TextBox = ({label = '', content = ''}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.WrapperTitle>
        <S.Title>{content}</S.Title>
      </S.WrapperTitle>
    </S.Container>
  );
};

export {TextBox};
