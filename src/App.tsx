import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './Store';
import Intro from './intro/Intro';
import Q1 from './q1/Q1';

function App() {
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro></Intro>}></Route>
          <Route path="/q1" element={<Q1></Q1>}></Route>
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
