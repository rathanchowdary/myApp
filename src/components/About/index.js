import "./index.css";

const About = () => (
  <div className="about-container">
    <h1 className="about-heading">
      <span className="text-white">ABOUT</span> ME
    </h1>
    <p className="text-info text-center mb-4">Personal Info</p>
    <span className="info-align mb-4">
      <span>
        <p className="info">
          <span className="ans">First Name: </span> Rathan Chowdary
        </p>
        <p className="info">
          <span className="ans">City: </span> Hyderabad
        </p>
        <p className="info">
          <span className="ans">Mail: </span> rathanchowdary@outlook.com
        </p>
      </span>
      <span>
        <p className="info">
          <span className="ans">Last Name: </span> Bommasani
        </p>
        <p className="info">
          <span className="ans">State: </span> Telangana
        </p>
        <p className="info">
          <span className="ans">Languages: </span> English, Telugu
        </p>
      </span>
    </span>
    <p className="text-info text-center mb-4">Education</p>
    <span className="info-align mb-4">
      <span>
        <p className="info">
          Nxtwave Disruptive Technologies <br />
          <span className="ans">
            Industry Ready Certification in Full-stack Development
          </span>
        </p>
        <p className="info">
          Malla Reddy University <br />
          <span className="ans">B Tech (Computer Science and Engineering)</span>
        </p>
        <p className="info">
          Sri Chaitanya Junior College <br />
          <span className="ans">Intermediate (MPC) </span>
        </p>
        <p className="info">
          Vision High School <br />
          <span className="ans">Secondary School Of Certificate</span>
        </p>
      </span>
      <span>
        <p className="info">
          July 2021 - Ongoing <br />
          <span className="ans">
            <br />
          </span>
        </p>
        <p className="info">
          2020 - 2024 <br />
          <span className="ans">Hyderabad</span>
        </p>
        <p className="info">
          2018 - 2020 <br />
          <span className="ans">Khammam</span>
        </p>
        <p className="info">
          2017 - 2018 <br />
          <span className="ans">Tiruvuru</span>
        </p>
      </span>
    </span>

    <p className="text-info text-center mb-4">Experience</p>
    <span className="info-align mb-4">
      <span>
        <p className="info">
          Fatcat <br />
          <span className="ans">Frontend Developer Intern</span>
        </p>
        <p className="info">
          NxtWave <br />
          <span className="ans">Teaching Assistant</span>
        </p>
      </span>
      <span>
        <p className="info">
          Oct 2022 - Feb 2023 <br />
          <span className="ans">Hyderabad</span>
        </p>
        <p className="info">
          Jul 2022 - Oct 2022 <br />
          <span className="ans">Hyderabad</span>
        </p>
      </span>
    </span>
  </div>
);
export default About;
