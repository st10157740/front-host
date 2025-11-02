import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/V01Z2MNC/Whats-App-Image-2025-09-05-at-17-26-07-1.jpg"
            alt="Mbabane Highlanders Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-white font-bold hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/membership" className="text-white font-bold hover:text-gray-300">
              Membership
            </Link>
          </li>
          <li>
            <Link to="/fanzone" className="text-white font-bold hover:text-gray-300">
              Fan Zone
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-white font-bold hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/fixture" className="text-white font-bold hover:text-gray-300">
              Fixture
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white font-bold hover:text-gray-300">
              Contact
            </Link>
          </li>
          {!user?.email && (
            <>
            <li>
              <Link to="/login" className="text-white font-bold hover:text-gray-300">Login</Link>
            </li>
            <li>
              <Link to="/register" className="text-white font-bold hover:text-gray-300">Register</Link>
            </li>
            </>
          )}


          {/* Show Admin tab only for admins */}
          {role === "admin" && (
            <li>
              <Link to="/admin" className="text-white font-bold hover:text-gray-300">
                Admin
              </Link>
            </li>
          )}

          {/* Show user info and logout */}
          {user?.email && (
            <>
              <li className="text-green-400 font-medium">
                Welcome, {user.email} ({role})
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-400 font-bold hover:underline"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;