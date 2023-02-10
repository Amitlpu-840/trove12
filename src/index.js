import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Resources from './components/Resources';
import Physics from './components/physics/Physics';
import Chemistry from './components/chemistry/Chemistry';
import Maths from './components/maths/Maths';
import Biology from './components/biology/Biology';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="trove12" element={<Home />} />
          <Route path="Team" element={<Team />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="/Resources/Physics" element={<Physics />} />
          <Route path="/Resources/Chemistry" element={<Chemistry />} />
          <Route path="/Resources/Maths" element={<Maths />} />
          <Route path="/Resources/Biology" element={<Biology />} />

        </Route>
      </Routes>
   
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
