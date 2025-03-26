import React from 'react';
import styles from './App.module.css';
import EventCreation from './pages/EventCreation/EventCreation';
import Template from './components/Template/Template';
import { Route, Routes } from 'react-router';
import Roulette from './pages/Roulette/Roulette';
import Home from './pages/Home/Home';
import Event from './pages/Events/Event/Event';
function App() {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventCreation />} />
        <Route path="/roulette/:id" element={<Roulette />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </Template>
  );
}

export default App;
