import { useState, InputHTMLAttributes } from 'react'

import Icons from '../Icons'

import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checkedItems?: string[],
  updateCheckedItems?: (items: string[]) => void,
  value: string
}

function CheckBox({ value, updateCheckedItems = () => {}, checkedItems = [], ...props }: Props) {
  const [isChecked, setIsChecked] = useState(false)

  const handlerRadioClick = () => {
    setIsChecked(prevState => !prevState)
  }
  
  const handlerInputChange = () => {
    if (isChecked) {
      updateCheckedItems([...checkedItems, value])
    } else {
      updateCheckedItems(checkedItems.filter(item => item !== value))
    }
  }

  return (
    <S.Container>
      <S.InputRadio checked={isChecked} onChange={handlerInputChange} {...props}  />

      <S.RadioButton onClick={handlerRadioClick}>
        {isChecked ? <Icons name="checked" /> : <S.EmptyCheckBox />}
      </S.RadioButton>
      
    </S.Container>
  )
}

export default CheckBox