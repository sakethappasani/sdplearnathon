import './adminnavbar.css';
import { Routes, Route, Link } from 'react-router-dom';
import AdminHome from './AdminHome';
import ViewUsers from './ViewUsers';
import ViewResponses from './ViewResponses';
import ViewSellers from './ViewSellers';

const AdminNavBar = () => {

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Pet Adoption and Accessories Management System</h1>
          <ul className='navbar-menu'>
            <li className='navbar-item'><Link to="/" className="navbar-link">Home</Link></li>
            <li className='navbar-item'><Link to='/viewusers' className="navbar-link">View Users</Link></li>
            <li className='navbar-item'><Link to='/viewsellers' className="navbar-link">View Sellers</Link></li>
            <li className='navbar-item'><Link to='/viewresponses' className="navbar-link">View Responses</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
            <Route path='/' element={<AdminHome/>} exact/>
            <Route path='/viewusers' element={<ViewUsers/>} exact/>
            <Route path='/viewsellers' element={<ViewSellers/>} exact/>
            <Route path='/viewresponses' element={<ViewResponses/>} exact/>
        </Routes>
    </div>
  );
};

export default AdminNavBar;