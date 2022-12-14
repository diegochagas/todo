import { useState } from 'react'

import Input from '../Input'

import * as S from './styles'
import iconClipboard from '../../assets/clipboard.svg'

function TaskList() {
  const [tasks, setTasks] = useState([])

  return (
    <S.Container>
      <Input />

      <S.EmptyTasks>
        <S.EmptyIcon src={iconClipboard} alt="icon clipboard" />

        <S.EmptyMessage>
          <S.EmptyTitle>
            You still doesn't have registered tasks
          </S.EmptyTitle>

          <S.EmptyText>
            Create tasks and organize your todo items
          </S.EmptyText>
        </S.EmptyMessage>
      </S.EmptyTasks>
    </S.Container>
  )
}

export default TaskList