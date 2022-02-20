import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Content = styled.View`
  width: 100%;
  height: ${RFPercentage(14)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
