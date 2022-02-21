import React from 'react';
import { View } from 'react-native';

import { Content, Title } from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
 return (
  <Content>
    <Title>
      {title}
    </Title>
  </Content>
  );
};

export default Header;
