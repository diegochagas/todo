import styled from 'styled-components';

import { COLORS } from '../../styles/global';

export const Container = styled.header`
  background: ${COLORS.GRAY_700};
  position: absolute;
  height: 12.5rem;
  left: 0;
  right: 0;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 1.375rem;
  height: 2.25rem; 
`

export const Title = styled.h1`
  margin-left: 0.75rem;
  font-size: 2.5rem;
`

export const LeftText = styled.span`
  color: ${COLORS.BLUE};
`

export const RightText = styled.span`
  color: ${COLORS.PURPLE_DARK};
`