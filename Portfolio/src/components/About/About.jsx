import React from 'react';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add this import

const About = () => {
    useEffect(() => {
  AOS.init({ once: true });
}, []);
  return (
    <section
      id="about"
      className="pt-10 pb-4 px-6 md:px-12 lg:px-20 font-sans mt-4"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sameer Ansari
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                    'Coder',
                  'Frontend Developer',
                  'Graphic Designer',
                  'Student'
                  ,
                  
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            Enthusiastic and self-driven Computer Science student with hands-on experience in frontend development .
            Passionate about startups, content creation, and leveraging AI tools for productivity . Quick learner with a creative mindset, strong problem-solving abilities, and a goal to make meaningful real-world impact through tech and innovation.
          </p>

          <a
            href="https://drive.google.com/file/d/1fvMaC-e4etO3qAyru8qnOTGnW5stkM-E/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left" data-aos-duration="1500" >
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full overflow-hidden shadow-lg">
            <img
              src={profileImage}
              alt="Sameer Ansari"
              className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
