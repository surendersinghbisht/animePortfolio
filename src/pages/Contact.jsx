import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-black font-custom2 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-12 text-center">
        Get in Touch
      </h1>

      {/* Contact Links Container */}
      <div
        className="
          flex flex-col sm:flex-row sm:flex-wrap
          items-center justify-center gap-6 sm:gap-8 md:gap-10
          max-w-5xl mx-auto text-center
        "
      >
        {/* GitHub */}
        <a
          href="https://github.com/surendersinghbisht"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-customRed transition-colors duration-300"
        >
          <FaGithub className="text-3xl sm:text-4xl md:text-5xl text-customRed" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl break-all">
            github.com/surendersinghbisht
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/surendersinghb08/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-customRed transition-colors duration-300"
        >
          <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl text-customRed" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl break-all">
            linkedin.com/in/surendersinghb08
          </span>
        </a>

        {/* Phone */}
        <a
          href="tel:9548379108"
          className="flex items-center gap-3 text-white hover:text-customRed transition-colors duration-300"
        >
          <FaPhone className="text-3xl sm:text-4xl md:text-5xl text-customRed" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl">
            +91-9548379108
          </span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=singhsurender28231@gmail.com"
          target="_blank"
          className="flex items-center gap-3 text-white hover:text-customRed transition-colors duration-300"
        >
          <FaEnvelope className="text-3xl sm:text-4xl md:text-5xl text-customRed" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl break-all">
            singhsurender28231@gmail.com
          </span>
        </a>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1qXVNGFm_e5uDMyRDqCqWQwI_2hy28Z-L/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-customRed transition-colors duration-300"
        >
          <FaFilePdf className="text-3xl sm:text-4xl md:text-5xl text-customRed" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl">
            My Resume
          </span>
        </a>
      </div>

      {/* Footer or Message */}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-12 text-center px-4">
        © {new Date().getFullYear()} Surender Singh Bisht — Crafted with ❤️ and clean code.
      </p>
    </div>
  );
};

export default Contact;
