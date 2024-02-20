import { useRef } from "react";

const FormulaireLoginComponent = ({ onLogin }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default FormulaireLoginComponent;
