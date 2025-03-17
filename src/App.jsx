
import './App.css'
import Employee from './components/Employee'
import { useState } from 'react'

function App() {
  const [role, setRole] = useState("dev");
  return (
    <div className='App'>
      <>
      <input type="text" onChange={(e) => {
            setRole(e.target.value);
      }} />
    <Employee name=" Banda" role="intern"/>
    <Employee name="Abdou" role={role}/>
    <Employee name="Aminata"/>
    </>
    </div>
  )
}

export default App
