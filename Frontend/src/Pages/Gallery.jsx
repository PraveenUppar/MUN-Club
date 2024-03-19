import { Link } from "react-router-dom";
import Logo2 from "../assets/p2.jpg";
import Logo5 from "../assets/p5.jpg";
import Logo6 from "../assets/p6.jpg";

const Gallery = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg  ">
              <h2 className="text-3xl py-2 font-semibold leading-7 text-indigo-600">
                Gallery
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h2 className="preahvihear-regular">VITB MUN CLUB</h2>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                Explore our collection of photos capturing the vibrant spirit
                and memorable moments from our various events, conferences,
                workshops, and simulations.
              </p>
              <br></br>
              <input
                type="file"
                name="image"
                className="flex px-3 py-2 font-bold hover:bg-gray-100 rounded-xl mb-2 md:mb-0 text-lg"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <img
          src={Logo2}
          alt="Logo"
          className="w-2/5 lg:w-2/6 h-auto mr-4 mb-4 rounded-lg"
        />
        <img
          src={Logo5}
          alt="Logo"
          className="w-2/5 lg:w-2/6 h-auto mr-4 mb-4 rounded-lg"
        />
        <img
          src={Logo6}
          alt="Logo"
          className="w-2/5 lg:w-2/6 h-auto mr-4 mb-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;
