import './mainnavbar.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Registration from '../user/Registration';
import UserLogin from '../user/UserLogin';
import AdminLogin from '../admin/AdminLogin';
import About from './About';
import SellerRegistration from '../seller/SellerRegistration';

const MainNavBar = () => {

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Pet Adoption and Accessories Management System</h1>
          <ul className='navbar-menu'>
            <li className='navbar-item'><Link to="/" className="navbar-link">Home</Link></li>
            <li className='navbar-item'><Link to='/registration' className="navbar-link">Registration</Link></li>
            <li className='navbar-item'><Link to='/sellerreg' className="navbar-link">Seller Registration</Link></li>
            <li className='navbar-item'><Link to='/userlogin' className="navbar-link">UserLogin</Link></li>
            <li className='navbar-item'><Link to='/adminlogin' className="navbar-link">AdminLogin</Link></li>
            <li className='navbar-item'><Link to='/about' className="navbar-link">About</Link></li>
            <li className='navbar-item'><Link to='/contact' className="navbar-link">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/registration' element={<Registration/>} exact/>
            <Route path='/sellerreg' element={<SellerRegistration/>} exact/>
            <Route path='/userlogin' element={<UserLogin/>} exact/>
            <Route path='/adminlogin' element={<AdminLogin/>} exact/>
            <Route path='/contact' element={<Contact/>} exact/>
            <Route path='/about' element={<About/>} exact/>
        </Routes>
    </div>
  );
};

export default MainNavBar;