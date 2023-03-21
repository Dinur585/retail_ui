import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Auth from "./components/Auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
