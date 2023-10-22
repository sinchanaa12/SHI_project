import React, { useState } from 'react';
import './login.css'; // Create App.css for styling

function App() {
  const [selectedOption, setSelectedOption] = useState('login');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted for:', selectedOption);
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="select-container">
          <label>
            Select User Type:
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="login">Login</option>
              <option value="register">Register</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;