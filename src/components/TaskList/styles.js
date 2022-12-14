import styled from 'styled-components';

import { COLORS, FONT_SIZE } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  margin-top: 10.75rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const EmptyTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  color: ${COLORS.GRAY_300};
`

export const EmptyIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`

export const EmptyMessage = styled.div`
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
  line-height: 1.4rem;
`
  
export const EmptyTitle = styled.h3`
  font-size: ${FONT_SIZE.LARGE};
`

export const EmptyText = styled.p`
  font-size: ${FONT_SIZE.LARGE};
`