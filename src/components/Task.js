import React from 'react'
import './style/Task.css'
import Img from '../images/circles.png'
const Task = ({title, description,leftColor,rightColor}) => (
    <div className="container" >
        <div className="card mx-auto Task" style={{ background:`url(${Img}), linear-gradient(to right, ${leftColor||'#239b86'}, ${rightColor||'#658700'})` }}>
            <div className="card-body Task-Info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div >
)

export default Task