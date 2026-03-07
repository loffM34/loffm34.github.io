import { useContext } from "react";
import AllProjectsContext from "../../context/AllProjectsContext";

const ProjectInfo = ({ projectId }) => {
  const { allProjectsData } = useContext(AllProjectsContext);
  const project = allProjectsData[projectId];
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {project.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project.ProjectInfo.Technologies[0].techs.join(", ")}
          </p>
        </div>

        {/* Project links (GitHub, DevPost, etc.) */}
        {project.ProjectInfo.ProjectLinks &&
          project.ProjectInfo.ProjectLinks.length > 0 && (
            <div>
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {project.ProjectInfo.ProjectLinksHeading}
              </p>
              <div className="flex items-center gap-3 mt-5">
                {project.ProjectInfo.ProjectLinks.map((link) => {
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="flex items-center gap-2 bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 px-4 rounded-lg shadow-sm duration-500"
                    >
                      <span className="text-lg lg:text-2xl">{link.icon}</span>
                      <span className="text-sm lg:text-base font-general-medium">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {project.ProjectInfo.ProjectDetailsHeading}
        </p>
        {project.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
