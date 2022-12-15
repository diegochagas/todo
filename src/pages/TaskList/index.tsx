import { useState } from 'react'

import Icons from '../../components/Icons'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'

import { api, Task } from '../../api'
import * as S from './styles'

function TaskList() {
  const [tasks, setTasks] = useState(api)
  const [doneTasks, setDoneTasks] = useState<string[]>([])
  
  const handlerInputChange = (inputValue: string) => {
    const newTask = {
      id: (tasks.length + 1).toString(),
      description: inputValue
    }
    
    setTasks(prevState => [...prevState, newTask])
  }

  const isDone = (taskId: string) => {
    return doneTasks.find(id => id === taskId)
  }

  const handlerDeleteTask = (taskId: string) => {
    setTasks(prevState => prevState.filter(task => task.id !== taskId))

    setDoneTasks(prevState => prevState.filter(doneId => doneId !== taskId))
  }

  return (
    <S.Container>
      <Input onSubmitInput={handlerInputChange} />

      {tasks.length > 0 ? (
        <S.Tasks>
          <S.TasksHeader>
            <S.TasksDetails>
              <S.Created>Created tasks</S.Created>

              <S.CircleNumber>{tasks.length}</S.CircleNumber>
            </S.TasksDetails>

            <S.TasksDetails>
              <S.Done>Done</S.Done>

              <S.CircleNumber>{doneTasks.length} of {tasks.length}</S.CircleNumber>
            </S.TasksDetails>
          </S.TasksHeader>

          {tasks.map((task: Task) => (
            <S.Task className={isDone(task.id) ? 'checked' : ''} key={task.id}>
              <Checkbox name="task" value={task.id} updateCheckedItems={setDoneTasks} checkedItems={doneTasks} />

              <S.Text>{task.description}</S.Text>

              <S.IconTrash onClick={() => handlerDeleteTask(task.id)}>
                <Icons name="trash" />
              </S.IconTrash>
            </S.Task>
          ))}
        </S.Tasks>
      ) : (
        <S.EmptyTasks>
          <Icons name="clipboard" />

          <S.EmptyMessage>
            <S.EmptyTitle>
              You still doesn't have registered tasks
            </S.EmptyTitle>

            <S.EmptyText>
              Create tasks and organize your todo items
            </S.EmptyText>
          </S.EmptyMessage>
        </S.EmptyTasks>
      )}
    </S.Container>
  )
}

export default TaskList