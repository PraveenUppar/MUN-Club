import { Link } from "react-router-dom";
import Logo2 from "../assets/p5.jpg";
import Logo3 from "../assets/p6.jpg";
import Logo4 from "../assets/p7.jpg";
import Profile from "../assets/profile.png";

const Team = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg  ">
              <h2 className="text-3xl py-2 font-semibold leading-7 text-indigo-600">
                Team Members
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h2 className="preahvihear-regular">VITB MUN CLUB</h2>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                Meet the dedicated individuals who lead and support the MUN
                Club.
              </p>
              <br></br>
              <div className="border px-9 py--4">
                <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                  <h2 className="preahvihear-regular">
                    <li>
                      <mark>Executive Board:</mark>
                    </li>
                  </h2>
                  <hr></hr>

                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            President - [President's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            Vice President - [Vice President's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            Secretary - [Secretary's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            Treasurer - [Treasurer's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <br></br>
                </p>
              </div>

              <br></br>
              <div className="border px-9 py--4">
                <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                  <h2 className="preahvihear-regular">
                    <li>
                      <mark>Marketing and Outreach:</mark>
                    </li>
                  </h2>
                  <hr></hr>

                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            [Event Coordinator's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            [Event Coordinator's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>

                  <br></br>
                </p>
              </div>

              <br></br>
              <div className="border px-9 py--4">
                <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                  <h2 className="preahvihear-regular">
                    <li>
                      <mark>Technical Coordinators:</mark>
                    </li>
                  </h2>
                  <hr></hr>
                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            [Technical Coordinator's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article class="flex max-w-xl flex-col items-start justify-between">
                    <div class="relative mt-8 flex items-center gap-x-4">
                      <img
                        src={Profile}
                        alt="profile"
                        class="h-15 w-15 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-gray-900 text-xl">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            [Technical Coordinator's Name]
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:pt-4">
            <div className="border px-9 py--4 ">
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
              <img
                src={Logo4}
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

export default Team;
