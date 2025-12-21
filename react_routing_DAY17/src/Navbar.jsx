import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        margin: 10,
        backgroundColor: "black",
        height: 40,
        textAlign: "center",
        padding: 10,
        width: "100%"          // FIXED
       
      }}
    >
      <nav>   {/* FIXED HERE */}
        <NavLink to="/" style={{ color: "white", margin: 20 }}>
          Home
        </NavLink>

        <NavLink to="/aboutus" style={{ color: "white", margin: 20 }}>
          About Us
        </NavLink>

        <NavLink to="/todo" style={{ color: "white", margin: 20 }}>
          Todos
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
