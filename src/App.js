import './App.css';
import Blog from './Views/Blog';
import Covid19 from './components/Covid19/Covid19.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Covid19 />} />
        <Route path="/blog" exact={true} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
