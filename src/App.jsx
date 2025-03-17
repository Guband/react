
import './App.css'
import Employee from './components/Employee'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        name: 'Banda',
        role: 'Developer',
        img:'https://cdn.pixabay.com/photo/2023/08/06/14/34/woman-8173091_1280.jpg'
      },
      {
        name: 'Aminata',
        role: 'Manager',
        img:'https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg'
      },
      {
        name: 'Abdou',
        role: 'Sale',
        img:'https://cdn.pixabay.com/photo/2020/04/02/12/21/man-4994922_1280.jpg'
      },
      {
        name: 'Maty',
        role: 'Engineer',
        img:'https://cdn.pixabay.com/photo/2016/10/20/06/39/portrait-1754752_1280.jpg'
      },
      {
        name: 'Madina',
        role: 'Devops',
        img:'https://cdn.pixabay.com/photo/2023/01/14/03/34/daughter-7717384_1280.jpg'
      },
      {
        name: 'Awa',
        role: 'Marrketing',
        img:'https://cdn.pixabay.com/photo/2016/09/21/10/16/deficient-1684470_1280.jpg'
      }
    ]
  );
  return (
    <div className="App">
      <>
      <input type="text" onChange={(e) => {
            setRole(e.target.value);
      }} />
      <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
          return(
            <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>
          );
        })}
    </div>
    </>
    </div>
  )
}

export default App
