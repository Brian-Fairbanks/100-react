function ProjectTile(props) {

  const {name, number, link} = props;
  return (
    <div className="projectWrapper">
      <a className="project" href={"https://brian-fairbanks.github.io/100-days/"+link+"index"}>
        <div className="imgWrap">
          <img className="img" src={"https://brian-fairbanks.github.io/100-days/"+link+"image.jpg"} alt={"screenshot from project: ",name} />
        </div>
        <div className="name">{name}</div>
        <div className="number">#{pad(number, 3)}</div>
      </a>
    </div>

  )
}


// Helper Functions

// will take a number, and pad it's start with 0s to a specific length, and return it as a string
function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

export default ProjectTile;