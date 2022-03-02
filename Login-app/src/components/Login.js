import React, { useState } from "react";
import { setUserSession } from "../Utils/Common";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {

    let navigate = useNavigate();

  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const dologin = () => {   
        setError(null);
        setLoading(true);
        const apiUrl = `http://localhost/RESTfulAPI/csrest/v1.0/auth/logon?applClass=Common&progId=Standard`;
        fetch(apiUrl,{
            method: 'GET', 
            headers: {
              'accept': '*/*',
              'X-Username' : username,
              'X-password' : password,
            }
        }).then( e => {
            setLoading(false);
            if (e.status === 200) {
                setUserSession(e.headers.get('x-archivetoken'), username)
                navigate('/dashboard')
            }
            else if (e.status !== 200) {
                alert("Username or password is wrong.");
            }
        })
        .catch((error) => {
            setLoading(false);
            alert('Error: Something went wrong, please try again.', error);
          });
}

 

    return (
        <div className="Login border border-primary mt-4 rounded shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className="mt-4 text-center">LOGIN</h2>
            
            <div className="p-2 border">
                Username
                <input
                className="col-md-12 "
                type="text"
                value={username}
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div className="p-2 border">
                Password
                <input className="col-md-12"
                type="password"
                value={password}
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button
            className=" col-md-12 mt-2 p-2 text-center btn-primary"
            type="button"
            value={loading ? "loading..." : "Login"}
            disabled={loading}
            onClick={dologin}
            >Login</button>

        </div>
    )

}

export default Login;