import logo from "../assets/img/logo.png";
import "../styles/footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>EXPLORE</h2>

        <a href="/#">Homepage</a>

        <a href="/#about">About</a>

        <a href="/#skills">Skills</a>

        <a href="/#project">Projects</a>

        <a href="/#extracurricular">Extracurriculars</a>

        <a href="/contact">Contact</a>
      </div>

      <div className="footer-content">
        <h2>Contact Details</h2>

        <p>
          {" "}
          <b> Whatsapp:</b> +91 6388249438
        </p>

        <p>
          {" "}
          <b>Email: </b>rishikesh7shukla@gmail.com
        </p>

        <div className="footer-social-icon">
          <a href="https://github.com/Anashritam">
            <i>
              <AiFillGithub />
            </i>
          </a>

          <a href="https://www.instagram.com/anashritam07?igsh=MWR5NGp4djB2YzB3Mw==">
            <i>
              {" "}
              <AiFillInstagram />
            </i>
          </a>

          <a href="https://www.linkedin.com/in/rishikeshshukla/">
            <i>
              <FaLinkedinIn />
            </i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />

        <h2>&copy; {new Date().getFullYear()} Rishikesh Shukla. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
