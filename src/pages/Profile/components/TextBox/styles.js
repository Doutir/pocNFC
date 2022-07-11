import styled from 'styled-components/native';
import {Layout, fontSize} from '../../../../helpers/Layout';

export const Container = styled.View`
  margin-bottom: ${Layout.Height(1)};
  background-color: #f1f1f1;
  border-radius: 10px;
`;

export const Label = styled.Text`
  /* margin-bottom: ${Layout.Height(0.5)}; */
  padding: 3px 10px;
  font-size: ${fontSize(12)};
  /* background-color: red; */
`;

export const WrapperTitle = styled.View`
  padding: 5px 10px;
`;

export const Title = styled.Text`
  font-size: ${fontSize(16)};
`;
