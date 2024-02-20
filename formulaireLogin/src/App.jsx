import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormulaireLoginComponent from './components/FormulaireLoginComponent';

function App() {
  const handleLogin = (username, password) => {
    console.log('Username:', username);
    console.log('Password:', password);
    
  };
  return (
    <>
      <FormulaireLoginComponent onLogin={handleLogin} />
    </>
  );
}

export default App



 
  

 

