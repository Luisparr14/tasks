import React from 'react'
import Task from './Task'

const TaskList =({tasks})=>(
    <React.Fragment>
        {
            tasks.map((task)=>{
                return(
                    <Task
                    key={task.id_task}
                    title={task.name}
                    description={task.description}
                    leftColor={task.leftColor}
                    rightColor={task.rightColor}
                    />
                )
            })
        }
    </React.Fragment>
)
export default TaskList 