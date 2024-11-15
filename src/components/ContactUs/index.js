import { FaGithub } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
const ContactUs = () => {
  return (
    <Bounce>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <a
          href="https://github.com/AxelAzriel27/CryptoCalc"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub /> GitHub
        </a>
      </section>
    </Bounce>
  );
};
export default ContactUs;
