import styled from 'styled-components/native';
import {fontSize, Layout} from '../../helpers/Layout';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 5%;
`;

export const WrapperEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: ${fontSize(18)};
  text-align: center;
  width: 90%;
  margin-bottom: ${Layout.Height(2)};
`;

export const WrapperLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: ${fontSize(18)};
  text-align: center;
  width: 90%;
  margin-bottom: ${Layout.Height(2)};
`;

export const LoadingIndicator = styled.ActivityIndicator``;
