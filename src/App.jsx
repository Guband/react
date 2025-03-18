
import './App.css'
import Employee from './components/Employee'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'Banda',
        role: 'Developer',
        img:'https://cdn.pixabay.com/photo/2023/08/06/14/34/woman-8173091_1280.jpg'
      },
      {
        id: 2,
        name: 'Aminata',
        role: 'Manager',
        img:'https://cdn.pixabay.com/photo/2022/05/22/16/50/outdoors-7213961_1280.jpg'
      },
      {
        id: 3,
        name: 'Abdou',
        role: 'Sale',
        img:'https://cdn.pixabay.com/photo/2020/04/02/12/21/man-4994922_1280.jpg'
      },
      {
        id: 4,
        name: 'Maty',
        role: 'Engineer',
        img:'https://cdn.pixabay.com/photo/2016/10/20/06/39/portrait-1754752_1280.jpg'
      },
      {
        id: 5,
        name: 'Madina',
        role: 'Devops',
        img:'https://cdn.pixabay.com/photo/2023/01/14/03/34/daughter-7717384_1280.jpg'
      },
      {
        id: 6,
        name: 'Awa',
        role: 'Marrketing',
        img:'https://cdn.pixabay.com/photo/2016/09/21/10/16/deficient-1684470_1280.jpg'
      }
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
          if(id == employee.id) {
            return {...employee, name: newName, role: newRole}
          }
          return employee;
    });
    setEmployees(updateEmployees)
  }
  return (
    <div className="App">
      <>
      <input type="text" onChange={(e) => {
            setRole(e.target.value);
      }} />
      <div className='flex flex-wrap justify-center'>
        {employees.map((employee) => {
          return(
            <Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} updateEmployee={updateEmployee} />
          );
        })}
    </div>
    </>
    </div>
  )
}

export default App
