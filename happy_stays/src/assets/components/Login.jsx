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



}
export default LoginPage
