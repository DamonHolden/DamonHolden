import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import NotFound from './components/pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
