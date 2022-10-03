import React, { useState } from 'react'

const UsestateObject = () => {

    const [val, setVal] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const changeValue = (e) =>{
        setVal({...val, [e.target.name] : e.target.value})
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h2 className="card-title text-center">Register</h2>
                    <div className="card-body py-md-4">
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="username"
                                    placeholder="Name"
                                    autoComplete="off"
                                    value={val.username}
                                    onChange={changeValue}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    value={val.email}
                                    onChange={changeValue}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    value={val.password}
                                    onChange={changeValue}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirm-password"
                                    name="confirm_password"
                                    placeholder="confirm-password"
                                    autoComplete="off"
                                    value={val.confirm_password}
                                    onChange={changeValue}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        <div>
                            <p>{`My name is ${val.username} and email is ${val.email}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsestateObject