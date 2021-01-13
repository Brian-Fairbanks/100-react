const { default: ProjectTile } = require("../ProjectTile");
const projects = require("./projects.json");

function ProjectWall() {
  return (
    <div className="wrapperContent container d-flex flex-wrap justify-content-center">
      {projects.map((project, index) => {
        return (
          <ProjectTile
            key={index}
            name={project.name}
            number={index}
            link = {project.src}
          />
        )
      }
    )}
    </div>
  )

}

export default ProjectWall;