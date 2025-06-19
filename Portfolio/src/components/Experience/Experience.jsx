import React, { useEffect } from "react";
import { experiences } from "../../constants";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
const Experience = () => {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white opacity-20 z-0" />

        {/* Timeline Cards */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative mb-20 flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 border-4 border-[#8245ec] rounded-full overflow-hidden flex items-center justify-center shadow-lg">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>

            {/* Content Box */}
            <div
              className={`w-full sm:max-w-[45%] mt-14 sm:mt-0 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
              }` } data-aos="fade-up-right" data-aos-duration="1000"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.role}</h3>
              <h4 className="text-md sm:text-lg text-gray-300">{exp.company}</h4>
              <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
              <p className="mt-4 text-gray-400">{exp.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {exp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
