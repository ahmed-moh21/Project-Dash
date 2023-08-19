import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Login.css";

function Login() {

    function handleClick() {
        const myApp = document.getElementById("appLog");
        myApp.style.width="0px";
        myApp.style.height="0px"

        const myApp1 = document.getElementById("appLog1");
        myApp1.style.display="none";
       
      }
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "Ahmed",
            password: "01028399304"
        },
        {
            username: "Moataz",
            password: "01122299563"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div id="appLog" className="app ">
            <div  id="appLog1" className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in
                    <div className="button-container">
                        <input
                         onClick={handleClick}
                         type="submit" value="Go in" />
                    </div>
                </div> : renderForm}
            </div>
        </div>
    );
}

export default Login;