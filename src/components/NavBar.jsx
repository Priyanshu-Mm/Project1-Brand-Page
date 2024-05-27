import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="public/Images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Location</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}
export default NavBar;
