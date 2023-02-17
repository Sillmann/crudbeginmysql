import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './pages/Employee';
import Add from './pages/Add';
import Update from './pages/Update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
