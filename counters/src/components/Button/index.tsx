import React, { useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
   Container,
   Title,
   Icon,
   ButtonContent,
} from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
}

const Button = ({ type, title,...rest }: Props) => {

  return (
    <Container
     type={type}
    >
     <ButtonContent  {...rest}>
        <Icon
          name={icons[type]}
          type={type}
        />

        <Title>
          {title}
        </Title>
      </ButtonContent>
    </Container>
  );
};

export default Button;
