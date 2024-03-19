import { Link } from "react-router-dom";
import Logo from "../assets/p1.jpg";
import Logo2 from "../assets/p2.jpg";
import Logo3 from "../assets/p3.jpg";

const Event = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg  ">
              <h2 className="text-3xl py-2 font-semibold leading-7 text-indigo-600">
                Events
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h2 className="preahvihear-regular">VITB MUN CLUB</h2>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                Stay up-to-date with our upcoming conferences, workshops, and
                other exciting events.
              </p>
              <br></br>
              <div className="border px-9 py--4">
                <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                  <h2 className="preahvihear-regular">
                    <li>
                      <big>Upcoming Events:</big>
                    </li>
                  </h2>
                  <hr></hr>
                  <br></br>
                  <ol>
                    <li>
                      <mark>1. Global Diplomacy Conference 2024</mark>
                    </li>
                    <li>Date: April 15-7, 2024</li>
                    <li>Location: Room 201</li>
                    <br></br>
                    <li>
                      <mark>2 .MUN Workshop Series</mark>
                    </li>
                    <li>Date: April 30-7, 2024</li>
                    <li>Location: Room 203</li>
                  </ol>
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                  <h2 className="preahvihear-regular">
                    <li>
                      <big>Past Events:</big>
                    </li>
                  </h2>
                  <hr></hr>
                  <br></br>
                  <ol>
                    <li>1. Global Diplomacy Conference 2024</li>
                    <li>Date: April 15-5, 2024</li>
                    <li>Location: Room 303</li>
                    <br></br>
                    <li>2 .MUN Workshop Series</li>
                    <li>Date: April 15-1, 2024</li>
                    <li>Location: Room 209</li>
                  </ol>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:pt-4">
            <div className="border px-9 py--4 ">
              <img
                src={Logo}
                alt="Logo"
                className="w-90 h-90 lg:w-100 lg:h-100 mt-5	rounded-lg"
              />
              <img
                src={Logo2}
                alt="Logo"
                className="w-90 h-90 lg:w-100 lg:h-100 mt-5	rounded-lg"
              />
              <img
                src={Logo3}
                alt="Logo"
                className="w-90 h-90 lg:w-100 lg:h-100 mt-5	rounded-lg"
              />
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
