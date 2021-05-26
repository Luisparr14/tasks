import React from 'react'
import './style/Task.css'
import Img from '../images/circles.png'
const Task = ({ title, description, leftColor, rightColor, button}) => (
    <div className="container" >
        <div className="card mx-auto Task" style={{ background: `url(${Img}), linear-gradient(to right, ${leftColor || '#6c4b8e'}, ${rightColor || '#1a6f87'})` }}>
            <div className="card-body Task-Info">
                <div className="Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                {button}
            </div>
        </div>
    </div >
)

export default Task