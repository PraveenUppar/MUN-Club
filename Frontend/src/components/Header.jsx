import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="bg-blue-700 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">VIT BHOPAL</Link>
        </span>
        <span className="text-4xl text-white font-bold tracking-tight md:ml-6 mt-4 md:mt-0">
          <Link to="/">Model United Nation Club</Link>
        </span>
        <span className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-6">
          {isAuthenticated && (
            <p className="flex bg-white items-center text-blue-600 px-3 py-2 font-bold hover:bg-gray-100 rounded-xl mb-2 md:mb-0 text-xl">
              {user.name}
            </p>
          )}
          {isAuthenticated ? (
            <>
              <button
                className="flex bg-white items-center text-blue-600 px-3 py-2 font-bold hover:bg-gray-100 rounded-xl mb-2 md:mb-0 text-xl"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="flex bg-white items-center text-blue-600 px-3 py-2 font-bold hover:bg-gray-100 rounded-xl mb-2 md:mb-0 text-xl"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </button>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
