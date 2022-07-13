import './App.css';
import AppRouter from './router/AppRouter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route path='' element={<AppRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
