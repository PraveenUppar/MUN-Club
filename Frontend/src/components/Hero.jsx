import { Link } from "react-router-dom";
import Logo from "../assets/Vitmun.jpg";

const Hero = () => {
  return (
    <div className="bg-blue-800 pb-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-7 mt-3 mb-3">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-24 lg:w-32 lg:h-32 mt-5 lg:mt-0 rounded-full"
        />
        <div className="text-center lg:text-left ml-5 ">
          <h1 className="text-3xl lg:text-4xl text-white font-bold mt-3 mb-3">
            Peace, Dignity and Equality on a Healthy Planet
          </h1>
          <br />
          <span className="flex flex-wrap justify-center lg:justify-start space-x-3 lg:space-x-7 ">
            <Link
              to="/"
              className="flex bg-white items-center text-blue-600 px-6 py-1 font-bold hover:bg-gray-100 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded-lg"
            >
              About us
            </Link>
            <Link
              to="/events"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded-lg"
            >
              Events
            </Link>
            <Link
              to="/team"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded-lg"
            >
              Team Members
            </Link>
            <Link
              to="/gallery"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded-lg  "
            >
              Gallery
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
