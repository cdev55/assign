import React from 'react'
import Task from './Task';

const TaskList = ({taskList}) => {
  return (
    <>
    {
        taskList.map(item=>(<Task task={item.task} />))
    }
    </>
  )
}

export default TaskList;