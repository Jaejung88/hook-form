import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setFirstName("");
    }
    return(
        <>
        <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
            <h2 className="text-center">Create User</h2>
            <label>First Name:</label>
            <input type="text"
                name="firstName"
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name:</label>
            <input type="text"
                name="lastName"
                value={lastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
            />
            <label>Email:</label>
            <input type="text"
                name="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input type="password"
                name="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password:</label>
            <input type="password"
                name="confirm"
                value={confirm}
                className="form-control"
                onChange={(e) => setConfirm(e.target.value)}
            />
            <input type="submit" value="Create User" className="btn btn-primary my-2"/>
        </form>
        <div className="col-5 my-5 mx-auto">
            <h4 className="text-center">Create User From Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
        </>
    );
}

export default HookForm;