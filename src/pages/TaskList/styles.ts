import styled from 'styled-components'

import { COLORS, FONT_SIZE } from '../../styles/global'

export const Container = styled.div`
  display: flex;
  margin-top: 10.75rem;
  margin: 10.75rem 1.25rem 0 1.25rem;
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

export const Tasks = styled.div`
  margin-top: 2.5rem;
  max-width: 46rem;
  width: 100%;
`

export const TasksHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const TasksDetails = styled.p`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Created = styled.span`
  color: ${COLORS.BLUE};
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: bold;
`

export const CircleNumber = styled.span`
  padding: .125rem .5rem;
  background: ${COLORS.GRAY_400};
  border-radius: 8px;
  color: ${COLORS.GRAY_200};
  font-weight: bold;

`

export const Done = styled.span`
  color: ${COLORS.PURPLE};
  font-size: ${FONT_SIZE.MEDIUM};
  font-weight: bold;
`

export const Task = styled.div`
  background: ${COLORS.GRAY_500};
  max-width: 46rem;
  display: flex;
  justify-content: space-between;
  min-height: 4.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  gap: 0.75rem;
  
  &+div {
    margin-top: 0.75rem;
  }

  &.checked {
    color: ${COLORS.GRAY_300};
    text-decoration-line: line-through;
  }
`

export const Text = styled.p`
  font-size: ${FONT_SIZE.MEDIUM};
  width: 100%;
`

export const IconTrash = styled.div`
  border-radius: 4px;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    background: ${COLORS.GRAY_400};

    path {
      fill: ${COLORS.DANGER};
    }
  }

`