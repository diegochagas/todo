import { useState } from 'react'
import Input from '../Input'

import * as S from './styles'

function TaskList() {
  const [tasks, setTasks] = useState([])

  return (
    <S.Container>
      <Input />

      <S.EmptyTasks>
        <img src="" alt="" />

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

export default TaskList;