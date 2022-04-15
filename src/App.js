import "./App.css";
import { Home } from "./pages/Home";
import {OrderDetails} from "./components/OrderDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="OrderDetails" element={<OrderDetails />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
