import React from 'react';
import * as S from './styles';

const ProfileImage = ({uri}) => {
  return (
    <S.Container>
      <S.Image
        resizeMode="cover"
        source={{
          uri: uri,
        }}
      />
    </S.Container>
  );
};

export {ProfileImage};
