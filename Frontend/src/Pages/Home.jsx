import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl py-2 font-semibold leading-7 text-indigo-600">
                Home
              </h2>

              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h2 className="preahvihear-regular">VITB MUN CLUB</h2>
              </p>
              <br></br>
              <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Register for our next Event.{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfsQMo-dMTvMFw0rTtdVnGn7zSdqKPVHwC5hbvhXgSMF_BxpQ/viewform?usp=sf_link"
                  class="font-semibold text-indigo-600"
                  target="_blank"
                >
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <u>Register Now!</u>
                </a>
              </div>

              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <li>
                  {" "}
                  <b>
                    MUN Club is an educational simulation and academic activity
                    that offers students a unique opportunity to delve into the
                    intricacies of diplomacy, international relations, and the
                    workings of the United Nations. Through role-playing as
                    delegates to UN committees, participants engage in lively
                    debates, negotiations, and resolution writing, aiming to
                    address pressing global issues
                  </b>
                </li>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <li>
                  <b>
                    At its core, MUN replicates the structure and procedures of
                    the UN, offering participants a glimpse into the world of
                    international politics.
                  </b>
                </li>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <li>
                  {" "}
                  <b>
                    Students assume the roles of delegates representing
                    different countries, organizations, or stakeholders within
                    UN committees and bodies, such as the General Assembly,
                    Security Council, Economic and Social Council, and
                    specialized agencies.
                  </b>
                </li>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 coda-extrabold">
                <li>
                  <b>
                    The essence of MUN lies in its emphasis on research,
                    critical thinking, and effective communication. Prior to
                    attending MUN conferences, delegates conduct thorough
                    research on their assigned countries' foreign policies,
                    historical positions, and current stances on the agenda
                    items. This preparation equips delegates with the knowledge
                    necessary to articulate their country's viewpoints and
                    engage in constructive dialogue with fellow delegates.
                  </b>
                </li>
              </p>
            </div>
          </div>

          <div className="lg:max-w-lg">
            <br />
            <div className="border px-4 py-4">
              <h2 className="preahvihear-regular">
                <mark>Key Features:</mark>
              </h2>
              <hr />
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Educational Platform:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  MUN serves as a dynamic platform for students to deepen their
                  understanding of global affairs, their public speaking skills,
                  and foster critical thinking abilities.
                </p>
              </p>
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Simulated UN Sessions:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  Participants immerse themselves in simulated UN committee
                  sessions, where they represent specific countries and work
                  collaboratively to navigate complex geopolitical challenges.
                </p>
              </p>
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Research and Preparation:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  Prior to conferences, delegates extensively research their
                  assigned countries' policies, positions, and historical
                  perspectives on various agenda items, ensuring informed and
                  effective participation.
                </p>
              </p>

              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Debate and Resolution Crafting:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  Through structured debates and negotiations, delegates engage
                  in constructive dialogue to address multifaceted issues,
                  ultimately crafting resolutions that propose solutions to
                  global problems.
                </p>
              </p>
            </div>
            <br />
            <div className="border px-4 py-4">
              <h2 className="preahvihear-regular">
                <mark>Benefits of Participation:</mark>
              </h2>
              <hr />
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Skill Development:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  MUN cultivates a range of valuable skills, including public
                  speaking, research, negotiation, teamwork, and leadership,
                  which are essential for academic and professional success.
                </p>
              </p>
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Global Awareness:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  By grappling with real-world challenges and assuming diverse
                  perspectives, participants gain a deeper understanding of
                  global issues, fostering empathy, cultural awareness, and a
                  sense of global citizenship.
                </p>
              </p>
              <br />
              <p className="ruluko-regular">
                <li>
                  <big>
                    <u>Networking Opportunities:</u>
                  </big>
                </li>
                <p className="coda-extrabold">
                  MUN conferences bring together students from diverse
                  backgrounds and institutions, providing valuable networking
                  opportunities and fostering lasting friendships and
                  professional connections.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900"
          >
            Feedback
          </label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
