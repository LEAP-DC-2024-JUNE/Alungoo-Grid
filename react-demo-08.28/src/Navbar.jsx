import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <div className="NavBar">
        <div>Brand Logo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
        </ul>
        <input type="text" placeholder="Search..."></input>
      </div>
    </Nav>
  );
}

export default Navbar;
