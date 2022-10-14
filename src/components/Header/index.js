import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import "./index.css";

const Header = () => (
  <nav className="nav-bg">
    <Link to="/">
      <img
        className="logo"
        src="https://res.cloudinary.com/dwghs4qnf/image/upload/v1665739160/Screenshot__427_-removebg-preview_n6wnw0.png"
        alt="logo"
      />
    </Link>

    <ul className="nav-ul">
      <Link to="/" className="nav-link text-right">
        <li>
          <span className="lap">Home</span>
          <span className="mob">
            <AiFillHome size={25} />
          </span>
        </li>
      </Link>
      <Link to="/skills" className="nav-link text-right">
        <li>
          <span className="lap">Skills</span>
          <span className="mob">
            <GiSkills size={22} />
          </span>
        </li>
      </Link>
      <Link to="/projects" className="nav-link text-right">
        <li>
          <span className="lap">Projects</span>
          <span className="mob">
            <GrProjects size={22} />
          </span>
        </li>
      </Link>
      <Link to="/about" className="nav-link text-right">
        <li>
          <span className="lap">About Me</span>
          <span className="mob">
            <BsFillPersonFill size={25} />
          </span>
        </li>
      </Link>
    </ul>
  </nav>
);

export default Header;
