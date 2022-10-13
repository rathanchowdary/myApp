import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";
import "./index.css";

const Home = () => (
  <div className="bg">
    <div className="home">
      <img
        className="pic ml-md-5"
        src="https://res.cloudinary.com/dwghs4qnf/image/upload/v1665333032/IMG_5788_2_jnkd8q.jpg"
        alt="pic"
      />
      <div className="text-center">
        <h1 className="main-heading">I'M RATHAN CHOWDARY</h1>
        <h1 className="role-heading">FULL STACK WEB DEVELOPER</h1>
        <p className="description-para">
          A passionate Full Stack Web Developer having an experience of building
          web Applications with Reactjs / Nodejs / Expressjs / JavaScript and
          some other cool libraries and frameworks and responsive web
          applications with cross-browser compatibility.
        </p>
      </div>
    </div>

    <span className="social-icons">
      <a
        target="_blank"
        rel="noreferrer"
        className="social-icons"
        href="https://www.linkedin.com/in/rathan-chowdary-bommasani/"
      >
        <AiFillLinkedin className="linked-in" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="social-icons"
        href="https://mobile.twitter.com/rathan_chowdary"
      >
        <AiFillTwitterSquare className="twitter" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="social-icons"
        href="mailto:rathanchowdary@outlook.com"
      >
        <AiOutlineMail className="mail" />
      </a>
    </span>
  </div>
);

export default Home;
