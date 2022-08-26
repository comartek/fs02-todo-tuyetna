import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userToken from '../../service/userToken';


const SignUp = (props) => {
  let { openNotificationWithIcon } = props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  let navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name: name,
      email: email,
      password: password,
      age: 20,
    }

    userToken.signup(data)
      .then(res => {
        navigate('/login', { replace: true })
        openNotificationWithIcon('success', "Sign up", "Create new user successfully")
      })
      .catch(error => console.log(error));


  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <form className='SignUp_form' onSubmit={(e) => { handleSubmit(e) }}>
          <div className="title">SIGN UP</div>
          <div className="input-container">
            <label >
              Name:
            </label><br />
            <input type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
          </div>



          <div className="input-container">
            <label>
              Email:
            </label><br />
            <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          </div>


          <div className="input-container">
            <label>
              Password:
            </label><br />
            <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          </div>


          <div className="input-container">
            <label>
              Confirm Password:
            </label><br />
            <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />

          </div>

          <div className="input-container">
            <input type="submit" value="Submit" />
          </div>


          <div className="input-container">
            <p>You already have an account? please <Link to='/login'>Sign in</Link></p>
          </div>

        </form>

      </header>
    </div>
  );
}

export default SignUp;