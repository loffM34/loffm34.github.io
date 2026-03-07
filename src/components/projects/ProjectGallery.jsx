import { useContext } from "react";
import AllProjectsContext from "../../context/AllProjectsContext";
import { useState } from "react";

const ProjectGallery = ({ projectId }) => {
  const { allProjectsData } = useContext(AllProjectsContext);
  const project = allProjectsData[projectId];
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-3 sm:gap-10 mt-12 justify-center">
      {project.ProjectImages.map((project) => {
        return (
          <div className="mb-0 sm:mb-0" key={project.id}>
            {project.img &&
            project.img.endsWith &&
            project.img.endsWith(".mp4") ? (
              <video
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => setModalImage(project.img)}
              />
            ) : (
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                onClick={() => setModalImage(project.img)}
              />
            )}
          </div>
        );
      })}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          {modalImage && modalImage.endsWith && modalImage.endsWith(".mp4") ? (
            <video
              src={modalImage}
              className="max-w-xl max-h-xl rounded-xl shadow-2xl"
              autoPlay
              loop
              muted
              controls
            />
          ) : (
            <img
              src={modalImage}
              alt="Zoomed"
              className="max-w-xl max-h-xl rounded-xl shadow-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
