import React from 'react'
import Cookies from 'universal-cookie'
import url from '../pages/config'

const cookies = new Cookies()
const ButtonComplete = (props) => {
    const handleClick = async () => {
        try {
            await fetch(`${url}tasks/delete/${cookies.get('uname')}/${props.idButton}`)
            window.location.href="/tasks"
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