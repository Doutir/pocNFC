import styled from 'styled-components/native';
import {Layout, fontSize} from '../../../../helpers/Layout';

export const Container = styled.View`
  margin-bottom: ${Layout.Height(1)};
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const Label = styled.Text`
  margin-bottom: ${Layout.Height(0.5)};
  padding: 0px 10px;
  font-size: ${fontSize(12)};
`;

export const WrapperContent = styled.ScrollView`
  padding: 0 10px;
  height: ${Layout.Height(22.5)};
`;

export const WrapperText = styled.View`
  /* margin: ${Layout.Height(1)} 0; */
  margin-bottom: ${Layout.Height(1.3)};
  /* padding: 3px 0px; */
  /* padding: 3px 0px; */
  border-radius: 5px;
  border: 0px solid #aaa;
  border-bottom-width: 0.5px;
`;

export const ContentText = styled.Text`
  font-size: ${fontSize(16)};
`;
