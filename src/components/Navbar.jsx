import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo3.png"
              className="h-12 w-30 mr-3 "
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2">
            {localStorage.getItem("isLoggedIn") !== null ? (
              <>
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    window.location.href = "/";
                  }}
                  type="button"
                  className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/home"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/track"
                  className="block py-2 pl-3 pr-4 rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Track Train
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
