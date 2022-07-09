import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Layout from './components/Layout.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
