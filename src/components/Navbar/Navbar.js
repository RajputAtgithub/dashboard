import { NavLink } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FaChessRook , FaChartLine } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import './Navbar.css';
import logo from '../../assets/images/fs_logo.png';
import useToggle from '../../hooks/useToggle';
import { TbNotes, TbHome2 } from "react-icons/tb";


function Navbar() {
    const [isDropdownOpen, toggleDropdown] = useToggle(false);


  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
      <img src={logo} alt="Firstbench Logo" className="logo" />
        <span className="brand-name">Firstbench</span>
      </div>
      <ul className="nav-links">
          <NavItem icon={<TbHome2 />} text="Dashboard" to="/dashboard" />
          <NavItem icon={<BsStars />} text="FirstGuru" to="/firstguru" />
          <NavItem icon={<FaChessRook />} text="Town Hall" to="/townhall" />
          <NavItem icon={<SlEnergy />} text="AI Evolution" to="/aievolution" />
          <NavItem icon={<FaChartLine />} text="Performance" to="/performance" />
          <NavItem icon={<TbNotes />} text="Mock Test" to="/mocktest" />
        </ul>
      <div className="nav-icons">
        <button className="icon-button">
          <FaBell />
          <span className="notification-badge">3</span>
        </button>
        <div className="profile-dropdown">
        <button className="icon-button" onClick={() => toggleDropdown()}>
          <FaUserCircle />
        </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="#profile" className="dropdown-item">Profile</a>
              <a href="#settings" className="dropdown-item">Settings</a>
              <a href="#logout" className="dropdown-item">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>

  );
}


const NavItem = ({ icon, text, to }) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
    >
      {icon}
      <span className="nav-text">{text}</span>
    </NavLink>
  );
  
export default Navbar;

