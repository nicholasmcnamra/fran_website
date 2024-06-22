import { useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState(String);
    const [passWord, setPassword] = useState(String);

    const handleFormSubmit = () => {
        if (!userName || !passWord) {
            alert("Please fill in both fields!");
        }
        else {
            //if HTTP Status = OK, print message to browser.
        }
    }

    return (
        <div className="login-container">
            <h2 className="login-head">Login</h2>
            <form onSubmit={handleFormSubmit} className="login-form">
                <div>
                    <label htmlFor="username" className="username">Username:</label>
                    <input 
                    type="text" 
                    className="username-input"
                    id="username-input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password" className="password">Password:</label>
                    <input 
                    type="text" 
                    className="password-input"
                    id="password-input"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    )
}