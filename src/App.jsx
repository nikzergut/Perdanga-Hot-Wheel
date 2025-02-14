import React from 'react';
import styles from './App.module.css';
import EventCreation from './pages/EventCreation/EventCreation';
import Template from './components/Template/Template';
import { Route, Routes } from 'react-router';
import Roulette from './pages/Roulette/Roulette';
import Home from './pages/Home/Home';

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventCreation />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Template>
  );
}

export default App;
