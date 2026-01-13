import logo from '../images/logo.png'

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <div class="logoyok"><img src={logo} alt="logo"/></div>
      </ul>
    </nav>
  );
}

export default Navbar;
