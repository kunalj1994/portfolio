import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href="mailto:kunalj1994@gmail.com" target="_blank" rel="noreferrer" data-cursor="disable">
                <FaEnvelope
                  style={{
                    marginRight: "10px",
                    position: "relative",
                    top: "2px",
                  }}
                />
                kunalj1994@gmail.com
              </a>
              <p></p>
              <a href="mailto:kunalj1994@gmail.com" target="_blank" rel="noreferrer" data-cursor="disable">
                <FaPhoneAlt
                  style={{
                    marginRight: "10px",
                    position: "relative",
                    top: "2px",
                  }}
                />
                +1 (945) 398-0849
              </a>
            </p>
            <h4>Education</h4>
            <p>M.S. Computer Engineering, The University of Texas at Dallas, Dallas — 2026–2027</p>
            <p>B.S. Computer Science, University at Buffalo (SUNY), Buffalo — 2012–2016</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/kunalj1994"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-jaiswal-142kj/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kunal Jaiswal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
