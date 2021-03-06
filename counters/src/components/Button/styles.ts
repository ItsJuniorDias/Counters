import styled, { css } from 'styled-components/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Feather  from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  type: 'up' | 'down';
}


export const Container = styled.View<ContainerProps>`
  width: 48%;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  elevation: 1;

`;

export const ButtonContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Icon = styled(Feather)<ContainerProps>`
  font-size: ${RFValue(30)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
   type === 'up' ? theme.colors.success : theme.colors.attention
  };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text}
`;
