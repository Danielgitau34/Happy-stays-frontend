import { useState } from 'react';

function LoginPage(){

    const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:3000//login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // User is authenticated, redirect to main page
        window.location.href = '/main';
      } else {
        // Show an error message
        alert('Invalid email or password');
      }
    });
  };


  return (

    <div class="container">
      <div class="wrapper">
        <div class="title"><span>Login Form</span></div>
        <form OnSubmit={handleLogin}>
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} /> <br/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>

          </div>

          <button type="submit">Login</button>

          {/* <div class="row button">
            <input type="submit"  value="Login">
          </div> */}
          <div class="signup-link">Don't have an account? <a href="/signup">Sign Up</a></div>
        </form>
      </div>
    </div>

  )



}
export default LoginPage
