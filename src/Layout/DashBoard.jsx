import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const DashBoard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar content */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart /> My Cart{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome />
              User Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <SlCalender />
              Reservation{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <MdOutlineRateReview />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <TbBrandBooking />
              My Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
