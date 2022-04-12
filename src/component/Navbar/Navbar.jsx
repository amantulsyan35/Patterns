//External Dependencies
import { Link, NavLink } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-logo'>
        <Link to='/'>&#128214;</Link>
      </div>

      <div className='nav-links-container'>
        <ul className='nav-links'>
          <NavLink to='/landing'>
            <FaInfoCircle className='nav-icon' />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
