import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

import Icons from '../Icons';

import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onSubmitInput: (value: string) => void
}

function Input({ onSubmitInput, ...props }: Props) {
  const [inputValue, setinputValue] = useState('')
  
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value)
  }

  const handlerInputSubmit = () => {
    onSubmitInput(inputValue)

    setinputValue('')
  }

  return (
    <S.Container>
      <S.Input value={inputValue} onChange={handlerInputChange} placeholder="Add a new task" {...props} />

      <S.Button onClick={handlerInputSubmit}>
        <S.Text>Criar</S.Text>

        <Icons name="plus" />
      </S.Button>
    </S.Container>
  );
}

export default Input;