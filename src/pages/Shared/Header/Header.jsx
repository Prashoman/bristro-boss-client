import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContextProvider);
  const [cart] = useCarts();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  //const testUser = true;
  const handleLogOut = () => {
    logOut()
      // .then((result) => {
      //   //console.log(result);
      // })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      {user && (
        <li>
          {isAdmin ? (
            <Link to="/dashboard/admin-home">Dashboard</Link>
          ) : (
            <Link to="/dashboard/user-home">Dashboard</Link>
          )}
        </li>
      )}
      <li>
        {user ? (
          <>
            <p>{user?.displayName ? user.displayName : ""}</p>
            <button onClick={handleLogOut} className="btn btn-sm">
              LogOut
            </button>{" "}
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <Link to="/dashboard/mycart">
        <button className="btn btn-sm ms-5 gap-2">
          Cart
          <div className="badge badge-secondary">{cart.length || 0}</div>
        </button>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-black max-w-[1200px]  text-white fixed z-10 bg-opacity-30 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          BISTRO BOSS <br /> Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;
