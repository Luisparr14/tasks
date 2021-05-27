import React from 'react'
import './style/Forms.css'
const SingInForm = ({ onSubmit, onChange, form }) => (
    <div className='container'>
        <form
            className="form mt-5"
            onSubmit={onSubmit}
        >
            <div className="mb-2">
                <input
                    name="userName"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                    onChange={onChange}
                />
            </div>

            <div className="mb-2">
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    required
                    onChange={onChange}
                />
            </div>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-success"
                    type="submit">
                    Log In
                </button>
            </div>
        </form>
    </div>
)
export default SingInForm