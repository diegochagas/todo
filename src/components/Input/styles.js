import styled from 'styled-components';

import { COLORS, FONT_SIZE } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 .5rem;
`;

export const Input = styled.input`
  padding: 0 1rem;
  border-radius: 8px;
  background: ${COLORS.GRAY_500};
  border: 1px solid ${COLORS.GRAY_700};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 3.375rem;
  max-width: 39.875rem;
  flex: 1;
  color: ${COLORS.GRAY_100};
  font-size: ${FONT_SIZE.MEDIUM};
`

export const Button = styled.button`
  padding: 1rem;
  width: 5.625rem;
  height: 3.25rem;
  border-radius: 8px;
  background: ${COLORS.BLUE_DARK};
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-left: .5rem;
  transition: background-color .2s;

  &:hover {
    background: ${COLORS.BLUE};
  }
`

export const Text = styled.span`
  color: ${COLORS.GRAY_100};
  font-weight: bold;
  font-size: ${FONT_SIZE.MEDIUM};
`