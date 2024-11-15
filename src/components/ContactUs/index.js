import { FaGithub } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";
const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <Bounce>
        <a
          href="https://github.com/AxelAzriel27/CryptoCalc"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub /> GitHub
        </a>
      </Bounce>
    </section>
  );
};
export default ContactUs;
