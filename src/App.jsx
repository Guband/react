import Header from "./components/Header";
import "./App.css";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createContext, useState } from "react";

export const LoginContext = createContext();

function App() {
  //check localStorage for an access token -->
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  function changedLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }
  return (
    <LoginContext.Provider value={[loggedIn, changedLoggedIn]}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/employees" element={<Employees />} />

            <Route path="/dictionary" element={<Dictionary />} />

            <Route path="/dictionary/:search" element={<Definition />} />

            <Route path="/customers" element={<Customers />} />

            <Route path="/customers/:id" element={<Customer />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/404" element={<NotFound />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
