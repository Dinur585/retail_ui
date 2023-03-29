import React, {useState} from 'react'
import axios from 'axios'
import '../styles/Auth.css'
import { useNavigate } from "react-router-dom";
const Auth = () => {
    let [authMode, setAuthMode] = useState("signin")
    let navigate = useNavigate(); 
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setAuthenticated] = useState(false)

    const createUser = (username, password) => {
      const user = {username, password}
      return user
    }
  
    const SubmitLoginForm = (e) => {
        
        e.preventDefault();
        const loginUrl = 'https://localhost:9001/api/v1/auth/login'
        const loginUser = createUser(username, password)
        axios.post(loginUrl, loginUser).then((resp)=>{
        setAuthenticated(resp.data)
        alert(resp.data.message)
      }
        ).catch(
          (err)=>alert(err.response.data.message)
        )
        navigate('/items');
    }

    const SubmitRegisterForm = (e) => {
      e.preventDefault();
      const registerUrl = 'https://localhost:9001/api/v1/auth/register'
      const registerUser = createUser(username, password)
      axios.post(registerUrl, registerUser).then((resp)=>alert(resp.data.message))
      .catch(err => alert(err.response.data.message))

  }


    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={(e)=> SubmitLoginForm(e)}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            {/* <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div> */}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e)=> SubmitRegisterForm(e)}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
  )
}

export default Auth