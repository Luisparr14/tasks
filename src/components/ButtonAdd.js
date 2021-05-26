import React from 'react'
import { Link } from 'react-router-dom'
import imageAdd from '../images/add.png'
import './style/ButtonAdd.css'
const ButtonAdd=()=>(
    <Link to="/task/new">
        <img src={imageAdd} className="Task-Add" alt="task-add" />
    </Link>
)

export default ButtonAdd