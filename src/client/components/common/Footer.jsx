import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-2 text-center">
      <div className="flex justify-center space-x-4 mt-4">
      <p className="text-md md:text-xl">Contact Me:</p>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl md:text-2xl" />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope className="text-xl md:text-2xl" />
        </a>
      </div>
      <p className="mt-4 text-sm md:text-base">
        &copy; {currentYear} | Photographer's Name
      </p>
    </footer>
  );
};

export default Footer;
