import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Download, Github, Twitter, Mail, Phone } from "lucide-react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F3F4F6;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  @keyframes dropIn {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
    60% {
      transform: translateY(30px);
    }
    80% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Project = ({ title, description, technologies, link, imageUrl }) => (
  <div className="mb-6 bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105">
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <img className="h-24 w-24 object-cover rounded-lg" src={imageUrl} alt={title} />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-medium text-blue-600">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-orange-100 text-orange-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  </div>
);

const ResumeTemplate = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset after animation
  };

  const experiences = [
    {
      title: "Full Stack Web Developer (As citizen not as a soldier)| Hatal",
      description: "Creating data entry and analysis dashboards for BI department.",
      technologies: ["Node.js", "Express.js", "Flask", "PostgreSQL", "React", "MUI"],
      imageUrl: "assests/hatal.png",
    },
  ];

  const projects = [
    {
      title: "From Selenium to Docker: Engineering Better Matches on OkCupid",
      date: "August 2023",
      description: [
        "Developed an automated system to optimize interactions on OkCupid, evolving from web inspection to a sophisticated IoT solution. ",
        "Implemented initial automation using Python and Selenium for mass messaging to potential matches. ",
        "Reverse-engineered OkCupid's private API to enable targeted, real-time interactions with online users. ",
        "Containerized the entire system using Docker and deployed it on a Raspberry Pi 3 for continuous 24/7 operation. ",
        "Applied economic signaling theory to optimize message timing, significantly boosting engagement and match rates. ",
      ],
      technologies: [
        "Python",
        "Selenium",
        "API Integration",
        "Docker",
        "Raspberry Pi",
        "Web Scraping",
        "Economic Modeling",
      ],
      link: "https://x.com/joelvdb2/status/1823369651516064233",
      imageUrl: "assests/okcupid.png",
    },
    {
      title: "Euro 2024 Fantasy Football Dashboard",
      date: "July 2024",
      description: [
        "Developed an interactive React.js dashboard for Euro 2024 fantasy football game by Sport5. ",
        "Implemented data fetching from Sport5's private API through detailed research and analysis. ",
        "Created features to identify most chosen players, view player prices by position, and track points made by each player. ",
        "Integrated data export functionality to CSV format for further analysis. ",
        "Designed and implemented an intuitive user interface for easy navigation and data interpretation. ",
      ],
      technologies: ["React.js", "API Integration", "Data Visualization", "CSV Export"],
      link: "https://x.com/joelvdb2/status/1810018846071214501",
      imageUrl: "assests/sport5.webp",
    },
    {
      title: "Military Training Score Analytics Platform",
      date: "January 2023",
      description: [
        "Developed a full-stack web application for uploading and analyzing military training scores, enabling data-driven insights for performance improvement. ",
        "Built a responsive and interactive frontend using React, allowing easy data input and visualization of training analytics. ",
        "Implemented a robust backend API with Python and Flask, handling data processing and complex queries for business intelligence. ",
        "Designed and managed a PostgreSQL database to efficiently store and retrieve large volumes of training data. ",
        "Orchestrated deployment on AWS using Kubernetes for scalability and resource management.",
        "Implemented CI/CD pipeline using GitHub Actions for automated testing and deployment, ensuring rapid and reliable updates. ",
      ],
      technologies: [
        "React",
        "Python",
        "Flask",
        "PostgreSQL",
        "AWS",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
      ],
      link: "https://artillery.digital.idf.il/",
      imageUrl: "assests/solelea.png",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl text-gray-800">
          <div className="flex flex-col md:flex-row md:items-center mb-6 pb-6 border-b-2 border-blue-200">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div
                className={`w-40 h-40 bg-orange-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg ${
                  isAnimating ? "animate-[dropIn_1s_ease-in-out]" : ""
                }`}
              >
                <img
                  src="assests/joelvdb.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-600 mb-2">
                Joel van der Boom
              </h1>
              <p className="text-xl text-orange-500 mb-2">Full Stack Web Developer</p>
              <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 mt-2">
                <a
                  href="mailto:joelvdb2@gmail.com"
                  className="flex items-center mb-2 md:mb-0 md:mr-4 hover:text-blue-600"
                >
                  <Mail size={16} className="mr-2" />
                  joelvdb2@gmail.com
                </a>
                <a
                  href="tel:+972527214041"
                  className="flex items-center mb-2 md:mb-0 md:mr-4 hover:text-blue-600"
                >
                  <Phone size={16} className="mr-2" />
                  +972-527214041
                </a>
                <a
                  href="https://github.com/joelvdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mb-2 md:mb-0 md:mr-4 hover:text-blue-600"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="https://twitter.com/joelvdb2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600"
                >
                  <Twitter size={16} className="mr-2" />
                  Twitter
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Jerusalem, Israel | Nationalities: American, Dutch(EU), Israeli
              </p>
              <div className="mt-4">
                <a target="_blank" blank href="assests/Joel_van_der_Boom_CV.pdf">
                  <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="mr-2" size={16} />
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Rest of the component remains the same */}

          <section className="mb-6 bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 pb-1 border-b border-blue-200">
              Summary
            </h2>
            <p className="text-gray-600 leading-relaxed">
              B.Sc. graduate in Computer Science and Economics from the Hebrew University
              of Jerusalem (HUJI), passionate about creative problem solving in security
              and software development. At 17, I discovered a vulnerability and crashed a
              website by mistake; by 18, I launched my first app on the Play Store for
              price comparison. After my army service, I began freelancing as a React
              Native developer for small projects. In the last couple of years, I’ve
              worked as a full-stack developer, further honing my skills and experience.
            </p>
          </section>

          <section className="mb-6 bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 pb-1 border-b border-blue-200">
              Experience
            </h2>
            {experiences.map((experience, index) => (
              <Project key={index} {...experience} />
            ))}
          </section>

          <section className="mb-6 bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 pb-1 border-b border-blue-200">
              Projects
            </h2>
            {projects.length > 0 ? (
              projects.map((project, index) => <Project key={index} {...project} />)
            ) : (
              <p className="text-gray-600 italic">No projects added yet.</p>
            )}
          </section>

          <section className="mb-6 bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 pb-1 border-b border-blue-200">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-medium text-orange-500">
                B.Cs. in Computer Science and Economics
              </h3>
              <p className="text-sm text-gray-500 italic">
                Hebrew University of Jerusalem, 2021 - 2024
              </p>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3 pb-1 border-b border-blue-200">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "MUI",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "SQL",
                "Python",
                "pandas",
                "numpy",
                "selenium",
                "Photoshop",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-100 to-orange-100 text-gray-800 text-sm font-medium px-4 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResumeTemplate;
