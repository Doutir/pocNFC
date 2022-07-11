import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import * as S from './styles';
import {TextBox} from './components/TextBox';
import {ProfileImage} from './components/ProfileImage';
import {ScrollText} from './components/ScrollText';
import {Button} from '../../components/Button';
import {api} from '../../services/api';

const Profile = ({route, navigation}) => {
  const {userId} = route?.params;
  const [dataUser, setDataUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get(`/users/${userId}`);
        setDataUser(response.data);
      } catch (err) {
        console.log({err});
        Alert.alert(
          'Oops',
          'houve um erro ao retornar dados do usuário, tente novamente',
        );
        navigation.goBack();
        console.log({err});
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [navigation, userId]);
  console.log({userId});
  if (!userId) {
    return (
      <S.WrapperEmpty>
        <S.EmptyText>
          Não localizamos nenhum usuário, tente novamente por favor
        </S.EmptyText>
        <Button onPress={() => navigation.goBack()}>Voltar</Button>
      </S.WrapperEmpty>
    );
  }
  if (loading) {
    return (
      <S.WrapperLoading>
        <S.LoadingText>Carregando...</S.LoadingText>
        <S.LoadingIndicator />
      </S.WrapperLoading>
    );
  }
  return (
    <S.Container>
      <ProfileImage uri={dataUser?.avatarURI} />
      <TextBox label="nome:" content={dataUser?.fullName} />
      <TextBox label="tipo sanguíneo:" content={dataUser?.bloodType} />
      <TextBox label="data de nascimento:" content={dataUser?.birthDate} />
      <TextBox label="cidade que mora:" content={dataUser?.cityLive} />
      <TextBox
        label="contato de emergência:"
        content={`${dataUser?.emergencyContact?.name} - ${dataUser?.emergencyContact?.telephoneNumber}`}
      />
      <ScrollText label="alergias:" content={dataUser?.allergies} />
      <Button onPress={() => navigation.goBack()}>Voltar</Button>
    </S.Container>
  );
};

export {Profile};
