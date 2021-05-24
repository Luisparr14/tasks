import React from 'react'

const SingUpForm = () => (
    <div className='container'>
        <form className="form mt-2">
            <div className="mb-2">
                <input name="userName" type="text" className="form-control" placeholder="Username" required></input>
            </div>
            <div className="mb-2">
                <input name="name" type="text" className="form-control" placeholder="Name" required></input>
            </div>
            <div className="mb-2">
                <input name="lastName" type="text" className="form-control" placeholder="Lastname"></input>
            </div>
            <div className="mb-2">
                <input name="password" type="password" className="form-control" placeholder="password"required></input>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-success" type="submit">
                    Create An Accont
                </button>
            </div>
        </form>
    </div>
)
export default SingUpForm