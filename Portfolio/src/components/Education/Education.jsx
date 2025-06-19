import React from "react";
import { school } from "../../constants"; // Your school data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-[7vw] lg:px-[4vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line Only on Large Screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {school.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative z-10 flex flex-col md:flex-row items-center mb-20 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="z-20 w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#8245ec] bg-gray-400 flex justify-center items-center absolute top-0 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`mt-20 md:mt-0 w-full md:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "md:ml-20" : "md:mr-20"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-12 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>
              <p className="text-gray-400 font-bold mt-4">Grade: {edu.grade}</p>
              <p className="text-gray-400 mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
