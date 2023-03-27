import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Auth from "./components/Auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Items from "./components/Items";
import { useContext } from 'react';
import { Store } from './Store';
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/items" element={<Items />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
