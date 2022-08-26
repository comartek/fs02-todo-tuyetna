import './Login.css'
import axios from 'axios'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SpinLoading from "../../components/spinner/Spinner";

const Login = (props) => {
  let { openNotificationWithIcon } = props
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`https://api-nodejs-todolist.herokuapp.com/user/login`, {
      "email": username,
      "password": password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {

        localStorage.setItem("token", res.data.token);
        openNotificationWithIcon('success', "login done", "Login successfully")
      }).then(() => {
        navigate('/todo', { replace: true })
        setLoading(false)
      })
      .catch(error => openNotificationWithIcon('error', "login fail", "user or password incorrect"));
  }

  return (
    <div className="login-form">
      {loading ? (<SpinLoading />) : ""}
      <div className="title">SIGN IN</div>
      <div className="form">
        <form onSubmit={handleLoginSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="name" onChange={e => setUserName(e.target.value)} />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" onChange={e => setPassword(e.target.value)} />

          </div>
          <div className="input-container">
            <input type="submit" value="Submit" />
          </div>
          <div className='checkinput-container'>
            <p>Don't have an account? <Link to='/signup'>Register now</Link></p>

          </div>
        </form>
      </div>
    </div>

  )
}


export default Login