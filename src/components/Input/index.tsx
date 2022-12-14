import React from 'react';

import * as S from './styles'
import iconPlus from '../../assets/plus.svg'

function Input() {
  return (
    <S.Container>
      <S.Input placeholder="Add a new task" />

      <S.Button>
        <S.Text>Criar</S.Text>

        <img src={iconPlus} alt="icon-plus" />
      </S.Button>
    </S.Container>
  );
}

export default Input;