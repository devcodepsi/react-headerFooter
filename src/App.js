import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Index from './page/index';
import Page1 from './page/page1';
import Page2 from './page/page2';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}
