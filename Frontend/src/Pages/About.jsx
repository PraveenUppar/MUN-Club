import { Link } from "react-router-dom";
import Logo from "../assets/Vitmun.jpg";

const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl py-2 font-semibold leading-7 text-indigo-600">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h2 className="preahvihear-regular">VITB MUN CLUB</h2>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                Welcome to Club!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <h2 className="preahvihear-regular">
                  <li>
                    <big>Club Background:</big>
                  </li>
                </h2>
                <hr></hr>
                Our MUN club at VITB has been a hub for students passionate
                about international affairs and diplomacy. Over the years, we've
                grown into a dynamic community of aspiring diplomats and global
                citizens.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <h2 className="preahvihear-regular">
                  <li>
                    <big>Club Activities:</big>
                  </li>
                </h2>
                <hr></hr>
                Throughout the academic year, we organize a variety of
                activities including: Participating in MUN conferences both
                locally and internationally Hosting in-house MUN simulations and
                workshops Conducting research and debates on pressing global
                issues Engaging in community outreach and advocacy projects
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <h2 className="preahvihear-regular">
                  <li>
                    <big>Membership Information:</big>
                  </li>
                </h2>
                <hr></hr>
                Membership in our MUN club is open to all students Whether
                you're a seasoned delegate or new to MUN, we welcome you to join
                us in our pursuit of excellence in diplomacy. To become a
                member, simply attend one of our meetings or events and express
                your interest to our executive board.
              </p>
            </div>
          </div>
          <div className="lg:max-w-lg lg:pt-10">
            <div className="border px-9 py--4 ">
              <img
                src={Logo}
                alt="Logo"
                className="w-90 h-90 lg:w-100 lg:h-100 mt-5 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
