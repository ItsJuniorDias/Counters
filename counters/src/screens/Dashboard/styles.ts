import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface CardProps {
  active: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Card = styled.TouchableOpacity<CardProps>`
  width: 100%;
  height: ${RFPercentage(32)}px;
  background-color: ${({ theme, active }) => active ? theme.colors.card_background : theme.colors.shape };
  margin-bottom: ${RFValue(16)}px;
  elevation: 1;
  border-radius: 8px;
  padding: 16px;
  /* margin-top: ${RFValue(32)}px; */
`;

export const ContentFlat = styled.SafeAreaView`
  flex: 1;
  padding: 0px 16px;
  margin-top: 32px;
  /* background-color: blue; */
`;

export const TitleCard = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  color: ${({ theme, active }) => active ?  theme.colors.shape : theme.colors.black};
`;

export const ContentEmpty = styled.View`
  height: ${RFPercentage(70)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TitleEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 16px;
`;
