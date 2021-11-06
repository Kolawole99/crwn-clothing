import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404. There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
