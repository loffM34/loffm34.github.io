import React from "react";
import profilePic from "../../images/profile.jpg";
import surfPhoto from "../../images/surfPhoto.jpg";
import soccerPhoto from "../../images/soccerPhoto.jpg";
import hackNJIT from "../../images/hackNJIT.jpg";
import hackRU from "../../images/hackRU.jpg";
import tennisTeam from "../../images/tennisTeam.png";
import gradAward from "../../images/graduationAward.jpg";
import InfiniteCarousel from "./SimpleCarousel";
import { FiArrowDownCircle, FiEye, FiMapPin } from "react-icons/fi";

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
      className="profile-card-glass"
      style={{
        maxWidth: "900px",
        width: "100%",
        borderRadius: "1.5rem",
        padding: "2.5rem",
        background: "rgba(30, 56, 81, 0.45)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(92, 225, 230, 0.15)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      {/* ── Two-column top section ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2.5rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Left — Profile Image & Actions */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="profile-glow-ring">
            <img
              src={profilePic}
              alt="Michael Loff"
              className="profile-glow-image"
            />
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              className="flex items-center gap-2 text-md mb-4 tracking-wide font-medium text-gray-300"
              style={{ color: "#c8d6e5" }}
            >
              <FiMapPin className="text-xl" style={{ color: "#5CE1E6" }} />
              <span>Hoboken, NJ</span>
            </p>

            <div className="flex justify-center gap-4 w-full">
              <a
                download="Michael_Loff_Resume.pdf"
                href="/files/MichaelLoffResume.pdf"
                className="resume-button-glass font-general-medium flex justify-center items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg flex-shrink-0"
                aria-label="Download Resume"
              >
                <FiArrowDownCircle
                  className="mr-2 h-5 w-5"
                  style={{ color: "#5CE1E6" }}
                />
                <span className="text-sm sm:text-base">Download CV</span>
              </a>
              <a
                href="/files/MichaelLoffResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-button-glass font-general-medium flex justify-center items-center px-4 py-2.5 sm:py-3 rounded-lg shadow-lg"
                aria-label="View Resume"
              >
                <FiEye
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  style={{ color: "#38B6FF" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Bio Text */}
        <div
          style={{
            flex: 1,
            minWidth: "260px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#f7f8fc",
              marginBottom: "0.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Hey! I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5CE1E6, #38B6FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Michael
            </span>
          </h2>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(92, 225, 230, 0.8)",
              fontWeight: 500,
              marginBottom: "1.25rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer · Stevens Institute of Technology
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#c8d6e5",
              marginBottom: "0.75rem",
            }}
          >
            I love building creative and meaningful technology, especially in{" "}
            <span style={{ color: "#5CE1E6", fontWeight: 600 }}>
              software engineering
            </span>{" "}
            and <span style={{ color: "#38B6FF", fontWeight: 600 }}>AI</span>.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#c8d6e5",
              marginBottom: "0.75rem",
            }}
          >
            I've worked as a Web Application Intern at{" "}
            <span style={{ color: "#5CE1E6", fontWeight: 600 }}>
              New Jersey Resources
            </span>{" "}
            and spend my time building projects, from{" "}
            <span style={{ color: "#38B6FF", fontWeight: 600 }}>AI tools</span>{" "}
            to surf forecasting apps.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#c8d6e5",
            }}
          >
            Outside of coding you'll find me{" "}
            <span role="img" aria-label="surf">
              🏄‍♂️
            </span>{" "}
            surfing,{" "}
            <span role="img" aria-label="soccer">
              ⚽
            </span>{" "}
            playing soccer or{" "}
            <span role="img" aria-label="tennis">
              🎾
            </span>{" "}
            tennis, or teaching through STEM programs.
          </p>
        </div>
      </div>

      {/* ── Carousel (untouched) ── */}
      <div style={{ marginTop: "2rem" }}>
        <InfiniteCarousel images={images} />
      </div>
    </div>
  );
};

export default ProfileCard;
