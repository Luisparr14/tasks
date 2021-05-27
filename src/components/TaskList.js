import React from 'react'
import ButtonComplete from './ButtonComplete'
import Task from './Task'

const TaskList = ({tasks}) => (
    <React.Fragment>
        {
            tasks.map((task) => {            
                return (
                    <Task
                        key={task.id_tasks}
                        title={task.name}
                        description={task.description}
                        leftColor={task.left_color}
                        rightColor={task.right_color}
                        button={<ButtonComplete
                        idButton={task.id_tasks}
                        />}
                    />
                )
            })
        }
    </React.Fragment>
)
export default TaskList