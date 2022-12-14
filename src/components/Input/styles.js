import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 .5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  background: ${COLORS.GRAY_500};
  border: 1px solid ${COLORS.GRAY_700};
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
`

export const Text = styled.span`
  color: ${COLORS.GRAY_100};
  font-style: italic;
  font-weight: bold;
  font-size: ${FONT_SIZE.MEDIUM};
`