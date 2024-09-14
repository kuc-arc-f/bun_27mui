import { Routes, Route } from 'react-router-dom';

import Head from './components/Head'
//
import Home from './client/home';
import About from './client/about';
import Button from './client/Button';
import Checkbox from './client/Checkbox';
import RadioButtonsGroup from './client/RadioButtonsGroup';
import Select from './client/Select';
// 
const App = () => {
  return (
  <div className="App">
    <Head />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/button" element={<Button />} />
      <Route path="/checkbox" element={<Checkbox />} />
      <Route path="/radio" element={<RadioButtonsGroup />} />
      <Route path="/select" element={<Select />} />
    </Routes>
  </div>
  );
};

export default App;

