import { BsBoxArrowUpRight } from "react-icons/bs";
import "./index.css";

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-heading mt-4 mb-1">PROJECTS</h1>

    <ul className="projects-ul">
      <li className="projects-li">
        <img
          className="project-pic"
          src="https://innodatatics.ai/assets/services/machine_learning_and_ai_3.png"
          alt="project"
        />
        <div className="project-details-container">
          <span className="navigate">
            <h5>Jobby App</h5>
            <a
              href="https://rathanjobby.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
          </span>
          <p className="mt-4 para">
            <b>Description: </b>
            <br />
            Implemented Jobby App where users can log in and can see a list of
            jobs with search by Job title, filters based on Salary range and
            Employment type, etc.
          </p>
          <p className="mt-4 para">
            <b>Technologies used:</b> React JS, JS, CSS, Bootstrap, Routing,
            REST API Calls, Local Storage, JWT Token, Authorization,
            Authentication
          </p>
        </div>
      </li>
      <li className="projects-li">
        <img
          className="project-pic"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="project"
        />
        <div className="project-details-container">
          <span className="navigate">
            <h5>Nxt Trendz</h5>
            <a
              href="https://rathannxttrendz.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
          </span>
          <p className="mt-4 para">
            <b>Description: </b>
            <br />
            Implemented Nxt Trendz application which is a clone for ECommerce
            applications like Amazon, Flipkart where users can login and can see
            list of products with search, filters, sort by, etc.
          </p>
          <p className="mt-4 para">
            <b>Technologies used:</b> React JS, JS, CSS, Bootstrap, Routing,
            REST API Calls, Local Storage, JWT Token, Authorization,
            Authentication
          </p>
        </div>
      </li>

      <li className="projects-li">
        <img
          className="project-pic"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
          alt="project"
        />
        <div className="project-details-container">
          <span className="navigate">
            <h5>Food Munch</h5>
            <a
              href="https://rathanfoodmunch.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
          </span>
          <p className="mt-4 para">
            <b>Description: </b>
            <br />
            Developed a responsive website for Food Store where users can see a
            list of food items, detailed information about a food item, offers.
          </p>
          <p className="mt-4 para">
            <b>Technologies used:</b> HTML, CSS, Bootstrap
          </p>
        </div>
      </li>
      <li className="projects-li">
        <img
          className="project-pic"
          src="https://i.insider.com/5fbd515550e71a001155724f?width=700"
          alt="project"
        />
        <div className="project-details-container">
          <span className="navigate">
            <h5>Wikipedia Search Application</h5>
            <a
              href="https://rathanwikipedia.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
          </span>
          <p className="mt-4 para">
            <b>Description: </b>
            <br />
            Developed bookmark maker where user can add list of websites with
            custom name, and can visit bookmarked website later by clicking on
            the specific website.
          </p>
          <p className="mt-4 para">
            <b>Technologies used:</b> HTML, CSS, JS, REST API Calls, Bootstrap
          </p>
        </div>
      </li>
      <li className="projects-li">
        <img
          className="project-pic"
          src="https://media.istockphoto.com/photos/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background-picture-id1268465415?k=20&m=1268465415&s=612x612&w=0&h=dzRhC8EPw1bZTIDzxc0416FaL8IF71RCPNjBlYUgzQA="
          alt="project"
        />
        <div className="project-details-container">
          <span className="navigate">
            <h5>Trivia Quiz</h5>
            <a
              href="https://triviaquiz.ccbp.tech/"
              target="_blank"
              rel="noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
          </span>
          <p className="mt-4 para">
            <b>Description: </b>
            <br />
            Implemented Quiz Application where users can attempt quiz on various
            programming languages like Python, JavaScript and improve the
            knowledge.
          </p>
          <p className="mt-4 para">
            <b>Technologies used:</b> HTML, CSS, JS, Bootstrap
          </p>
        </div>
      </li>
    </ul>
  </div>
);

export default Projects;
