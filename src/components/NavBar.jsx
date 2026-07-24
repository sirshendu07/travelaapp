import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        
        {/* LEFT SIDE: Dark Oval Logo */}
        <div className="logo-oval">
          <span className="logo-text">
             <span className="logo-verse">PEAKS AND PASSES</span>
          </span>
        </div>

        {/* RIGHT SIDE: Search & Hover Menu */}
        <div className="nav-right">
          <input 
            type="text" 
            placeholder="Search destinations..." 
            className="search-bar" 
          />
          
          {/* Collapsible Hover Menu */}
          <div className="dropdown-container">
            <div className="menu-title">Explore ▼</div>
            <div className="dropdown-content">
              <a href="#destinations">Destinations</a>
              <a href="#tours">Guided Tours</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;