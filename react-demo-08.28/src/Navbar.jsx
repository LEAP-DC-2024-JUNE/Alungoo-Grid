import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <Nav>
    <div>
      <Link to={"/about"}>
        <div>Brand Logo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
        </ul>
        <input type="text" placeholder="Search..."></input>
      </Link>
    </div>
    // </Nav>
  );
}

export default Navbar;
