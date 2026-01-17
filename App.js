import CalorieTracker from './CalorieTracker'
import Page2 from './Page2'
import { Routes, Route } from 'react-router-dom'
import React, {useState} from 'react'




function App() {


const[cal , setCal] = useState(0);


  return (


      <Routes>
          <Route path="/" element={<CalorieTracker cal={cal} setCal={setCal} />} />
          <Route path="/page" element={<Page2 cal={cal} />} />
      </Routes>
  );


}

export default App;
