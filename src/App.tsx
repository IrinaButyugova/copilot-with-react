import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './RegisterPage';
import Employees from './Employees';

function HomePage() {
  return <h1>Welcome to the Homepage</h1>;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
