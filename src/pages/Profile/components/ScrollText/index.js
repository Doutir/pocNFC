import React from 'react';
import * as S from './styles';

const ScrollText = ({label = '', content = []}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.WrapperContent
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {content.map(allergy => (
          <S.WrapperText key={allergy}>
            <S.ContentText>{allergy}</S.ContentText>
          </S.WrapperText>
        ))}
      </S.WrapperContent>
    </S.Container>
  );
};

export {ScrollText};
