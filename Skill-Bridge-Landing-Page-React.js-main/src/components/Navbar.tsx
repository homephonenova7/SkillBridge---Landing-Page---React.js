import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b bg-back">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Skill Bridge" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary-foreground">Skill Bridge</span>
          </NavLink>
          <div className="flex space-x-4">
            {/* Use NavLink for navigation links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-foreground font-bold border-b-4 border-blue-800 px-3 py-2"
                  : "text-primary-foreground hover:text-gray-900 px-3 py-2 font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                   ? "text-primary-foreground font-bold border-b-4 border-blue-800 px-3 py-2"
                    : "text-primary-foreground hover:text-gray-900 px-3 py-2 font-bold"
              }
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
