
function Outro(){
  return(
    <div className="text-center highlight">
      Like what you see?  Click my logo to check out my resume page for contact information
      <a target="_blank" href="https://brian-fairbanks.github.io/Resume/">
        <img className="logo" src={require("../../../logo.svg")} alt="BF Logo"/>
      </a>
    </div>
  )
}

export default Outro;