import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className="min-h-screen bg-black font-heading flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8">
        Get in Touch
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/surendersinghbisht"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-customOrange transition-colors"
        >
          <FaGithub className="text-3xl text-customOrange sm:text-4xl" />
          <span className="text-base sm:text-lg md:text-xl">
            github.com/surendersinghbisht
          </span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/surendersinghb08/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-customOrange transition-colors"
        >
          <FaLinkedin className="text-3xl text-customOrange sm:text-4xl" />
          <span className="text-base sm:text-lg md:text-xl">
            linkedin.com/in/surendersinghb08
          </span>
        </a>
        {/* Phone */}
        <a
          href="tel:9548379108"
          className="flex items-center gap-2 text-white hover:text-customOrange transition-colors"
        >
          <FaPhone className="text-3xl text-customOrange sm:text-4xl" />
          <span className="text-base sm:text-lg md:text-xl">+91-9548379108</span>
        </a>
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=singhsurender28231@gmail.com"
          target='_blank'
          className="flex items-center gap-2 text-white hover:text-customOrange transition-colors"
        >
          <FaEnvelope className="text-3xl text-customOrange sm:text-4xl" />
          <span className="text-base sm:text-lg md:text-xl">
            singhsurender28231@gmail.com
          </span>
        </a>
        {/* Download Resume */}
        <a
          href="https://drive.google.com/file/d/1qXVNGFm_e5uDMyRDqCqWQwI_2hy28Z-L/view?usp=drive_link" // Make sure to replace this with the actual path
          download
          target='_blank'
          className="flex items-center gap-2 text-white hover:text-customOrange transition-colors"
        >
          <FaFilePdf className="text-3xl text-customOrange sm:text-4xl" />
          <span className="text-base sm:text-lg md:text-xl">My Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
