import react, { useState } from 'react';
import './App.css';



export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();

    if( username === 'user' && password === 'password') {

      setMessage('Welcome, user!')
      setUsername('');
      setPassword('');
    }
    else {
      setMessage('Invalid username or password')
    }
  }






  return (
    <div className="login">


      <h1>Login Page</h1>


      {message && (
        <div className='message'>
          {message === 'Welcome, user!' ? message: 'Invalid username or password'}
        </div>
      )}



      {!message || message === 'Invalid username or password' ? (

        <form onSubmit={handleSubmit}>

          <div className='form_input'>

            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id='username'
              value={username}
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          <div className='form_input'>

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
          </div>
          <button type='submit'>Submit</button>
        </form>

      ) : null}
      
    </div>
  );
}

