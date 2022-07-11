import styled from 'styled-components/native';
import {Layout} from '../../../../helpers/Layout';

export const Container = styled.View`
  width: ${Layout.Height(16)};
  height: ${Layout.Height(16)};
  border-radius: ${Layout.Height(100)};
  margin: 0 auto;
  margin-bottom: ${Layout.Height(3)};
  background-color: #f9f9f9;
`;

export const Image = styled.Image`
  width: ${Layout.Height(16)};
  height: ${Layout.Height(16)};
  border-radius: ${Layout.Height(100)};
`;
