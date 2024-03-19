import Instagram from "../assets/icons8-instagram-94.png";
import Linked from "../assets/icons8-linkedin-48.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Model United Nation Club
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4 items-center">
          <a
            href="https://www.instagram.com/vitb.mun?igsh=MXViczB0eXZxcmcxMg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} className="w-12 h-12" alt="Instagram logo" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Linked} className="w-12 h-12" alt="LinkedIn logo" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} className="w-12 h-12" alt="Twitter logo" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} className="w-12 h-12" alt="Facebook logo" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
