import "../Styling/Projects.css";
import Prompt from "../Prompt";

function Projects() {
  const plcholder = Math.floor(Math.random() * 7);
  return (
    <>
      <div className="project_container">
        <div className="project">
          <a href="https://possibleweb.vercel.app" target="_blank">
            <button>Possibleweb</button>
          </a>
        </div>
        <div className="project">
          <a href="https://termozet.vercel.app" target="_blank">
            <button>Termozet</button>
          </a>
        </div>
        <div className="project">
          <a href="https://colourzen.netlify.app" target="_blank">
            <button>Colourzen</button>
          </a>
        </div>
      </div>
      <Prompt
        placeholder={
          plcholder == 0
            ? "Type 'cd social'"
            : plcholder == 1
            ? "Type 'cd play'"
            : plcholder == 2
            ? "Type 'about'"
            : plcholder == 3
            ? "Type 'contact'"
            : plcholder == 4
            ? "Type 'awards'"
            : plcholder == 5
            ? "Type 'portfolio'"
            : "Type 'projects'"
        }
        value=""
        cd=""
      />
    </>
  );
}

export default Projects;
