import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Album from './components/Album';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/blog" element={<Album />} />
          <Route path="" element={<Navigate to="/login"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
