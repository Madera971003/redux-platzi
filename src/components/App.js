import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Publicaciones from "./Publicaciones";
import Usuarios from "./usuarios";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Routes>
            <Route path='/' element={<Usuarios />} />
            <Route path='/publicaciones/:key' element={<Publicaciones />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;