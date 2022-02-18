import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(14)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
