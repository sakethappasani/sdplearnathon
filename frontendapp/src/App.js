import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar"


function App() {
  return (
    <div className="App">
      <Router>
      <MainNavBar/>
      <AdminNavBar/>
      </Router>
    </div>
  );
}

export default App;
