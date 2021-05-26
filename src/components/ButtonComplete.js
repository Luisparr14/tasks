import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const ButtonComplete = (props) => {
    const handleClick = async () => {
        try {
            await fetch(`http://localhost:8000/api/tasks/delete/${cookies.get('uname')}/${props.idButton}`)
            // window.location.href="/tasks"
        } catch (error) {

        }
    }
    return (
        <div className="Btn-Complete">
            <button onClick={handleClick} className="btn btn-success btn-sm">Completed</button>
        </div>
    )
}
export default ButtonComplete