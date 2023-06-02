import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaStarHalfAlt,
  FaBars,
  FaShoppingBag,
  FaMailBulk,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCarts();
  const [isAdmin] = useAdmin();
  //console.log(isAdmin);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 uppercase bg-[#D1A054]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaUtensils></FaUtensils>add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allmenus">
                  <FaWallet></FaWallet>manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers>all users
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook></FaBook>manage bookings
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet> Payments History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <button className="btn btn-sm ms-5 gap-2">
                    Cart
                    <div className="badge badge-secondary">
                      {cart.length || 0}
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaStarHalfAlt></FaStarHalfAlt> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook></FaBook> My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaShoppingBag></FaShoppingBag> shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaMailBulk></FaMailBulk> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
