import styled from 'styled-components'

import { COLORS } from '../../styles/global'

export const Container = styled.label`
  display: flex;
`

export const InputRadio = styled.input`
  opacity: 0;
  position: absolute;
`

export const RadioButton = styled.div`
  cursor: pointer;
  z-index: 1;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EmptyCheckBox = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${COLORS.BLUE};
  border-radius: 50%;

  &:hover {
    border-color: ${COLORS.BLUE_DARK};
  }
`