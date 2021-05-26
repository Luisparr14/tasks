import React from 'react'

const SingUpForm = ({ onSubmit, onChange,form}) => (
    <div className='container'>
        <form className="form mt-5"
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
                    value={form.userName}
                />
            </div>
            <div className="mb-2">
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={onChange}
                    value={form.name}
                />
            </div>
            <div className="mb-2">
                <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    required
                    onChange={onChange}
                    value={form.lastName}
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
                    value={form.password}
                />
            </div>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-success"
                    type="submit">
                    Create An Accont
                </button>
            </div>
        </form>
    </div>
)
export default SingUpForm