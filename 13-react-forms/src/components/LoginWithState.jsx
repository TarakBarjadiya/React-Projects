import { useState } from 'react';

export default function LoginWithState() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  });

  const handleInput = (identifier, value) => {
    setEnteredValue((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInput('email', event.target.value)}
            value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInput('password', event.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
