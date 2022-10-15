import { SiExpress } from "react-icons/si";
import "./index.css";

const Skills = () => (
  <div className="skills-container">
    <h1 className="top-skills mt-4">My Top Skills</h1>
    <p className="text-white mt-5">Front-end</p>
    <ul className="skills-ul">
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          alt="skill"
        />
        <h5 className="mt-3">HTML5</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          alt="skill"
        />
        <h5 className="mt-3">CSS3</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="skill"
        />
        <h5 className="mt-3">JavaScript</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
          alt="skill"
        />
        <h5 className="mt-3">Bootstrap</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
          alt="skill"
        />
        <h5 className="mt-3">React Js</h5>
      </li>
    </ul>

    <p className="text-white mt-2">Back-end</p>
    <ul className="skills-ul">
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="skill"
        />
        <h5 className="mt-3">Python</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
          alt="skill"
        />
        <h5 className="mt-3">Node Js</h5>
      </li>
      <li className="skill-li">
        <span className="ex-lap">
          <SiExpress size={55} />
        </span>
        <span className="ex-mob">
          <SiExpress size={35} />
        </span>
        <h5 className="mt-3">Express</h5>
      </li>
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn-icons-png.flaticon.com/512/2306/2306173.png"
          alt="skill"
        />
        <h5 className="mt-3">SQL</h5>
      </li>
    </ul>
    <p className="text-white mt-2">Databases</p>
    <ul className="skills-ul">
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png"
          alt="skill"
        />
        <h5 className="mt-3">SQLite</h5>
      </li>
    </ul>
    <p className="text-white mt-2">Other</p>
    <ul className="skills-ul">
      <li className="skill-li">
        <img
          className="skill-img mt-1"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_logo_icon_146509.png"
          alt="skill"
        />
        <h5 className="mt-3">Git</h5>
      </li>
    </ul>
  </div>
);

export default Skills;
