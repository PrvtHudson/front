import './App.css';
import Main from './pages/Main';
import Admin from './pages/Admin';
import YourFormComponent from './pages/YourFormComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Login from './pages/Login'

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
     <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<YourFormComponent />} />
        
          <Route path="/admin" element={user ? <Admin /> : <Login />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
