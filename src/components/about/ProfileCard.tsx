import React from "react";
import profilePic from "../../images/profile.jpg";
import surfPhoto from "../../images/surfPhoto.jpg";
import soccerPhoto from "../../images/soccerPhoto.jpg";
import hackNJIT from "../../images/hackNJIT.jpg";
import hackRU from "../../images/hackRU.jpg";
import tennisTeam from "../../images/tennisTeam.png";
import gradAward from "../../images/graduationAward.jpg";
import InfiniteCarousel from "./SimpleCarousel";

const images = [
  { src: surfPhoto, description: "Surfing" },
  { src: hackNJIT, description: "NJIT Hackathon" },
  { src: soccerPhoto, description: "Monmouth Light FC" },
  { src: hackRU, description: "Rutgers Hackathon" },
  { src: gradAward, description: "Brookdale Grad/Award" },
  { src: tennisTeam, description: "Brookdale Tennis" },
];

const ProfileCard: React.FC = () => {
  return (
    <div
      className="max-w-2xl max-h-xl p-6 bg rounded-3xl shadow-xl text-center bg-primary-light dark:bg-ternary-dark dark:text-ternary-light overflow-hidden"
      style={{ overflow: "hidden" }}
    >
      <h1 className="mb-5 text-4xl font-semibold text-gray-800">About Me</h1>

      {/* Profile Image */}
      <div id="aboutImage" className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-image" />
        <div className="profile-overlay">
          <h1 className="profile-text">Michael Loff</h1>
        </div>
      </div>

      {/* About Text */}

      <p className="mt-4 text-xl text-gray-600">
        Hey! I’m a senior Computer Science student at Stevens Institute of
        Technology with a passion for building meaningful, creative tech—
        especially in software engineering and AI. This past summer, I worked as
        a Web Application Intern at New Jersey Resources, where I built tools to
        help modernize internal operations and learned a ton about full-stack
        development in a real-world setting.
      </p>

      <p className="mt-4 text-xl text-gray-600">
        Outside of coding, I’m big into soccer, surfing, and tennis. I also love
        teaching and mentoring: I’ve coached a rec soccer team, taught STEM at
        iCode, and served as President of the Brookdale CS Club.
      </p>

      <p className="mt-4 mb-8 text-xl text-gray-600">
        Lately, I’ve been focused on projects like a surf forecast web app, an
        alumni directory for my fraternity, and AI classification tools. I’m
        always excited to collaborate, experiment with new ideas, and build
        things that make a positive impact.
      </p>

      <InfiniteCarousel images={images} />
    </div>
  );
};

export default ProfileCard;
