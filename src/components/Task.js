import React from 'react'
import './style/Task.css'
const Task = ({title, description}) => (
    <div className="container" >
        <div className="card mx-auto Task" style={{ background: `linear-gradient(to right, ${'#239b86'}, ${'#658700'})` }}>
            <div className="card-body Task-Info">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div >
)

export default Task