import React from 'react'
import NamesUsers from './NamesUsers'

const FormAddTask = ({ onChange, onSubmit, form }) => (

    <div className="container">
        <form className="mt-5"
            onSubmit={onSubmit}
        >
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                />
            </div>
            <div className="mb-2" hidden={true}>
                <React.Fragment>
                    {
                        <NamesUsers />
                    }
                </React.Fragment>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <input 
                    name="leftColor"
                    type="color" 
                    className="form-control" 
                    style={{height:40}}
                    value={form.leftColor}
                    onChange={onChange}
                    />
                </div>
                <div className="col">
                    <input 
                    name="rightColor"
                    type="color" 
                    className="form-control" 
                    style={{height:40}} 
                    value={form.rightColor}
                    onChange={onChange}
                    />
                </div>
            </div>
            <div className="mb-2 d-grid gap-2">
                <button className="btn btn-success" type="submit">
                    Add Task
                </button>
            </div>
        </form>
    </div>

)

export default FormAddTask