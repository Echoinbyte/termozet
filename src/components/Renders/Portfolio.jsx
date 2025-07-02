import "../Styling/Portfolio.css";
import Prompt from "../Prompt";

function Portfolio() {
  const plcholder = Math.floor(Math.random() * 7);
  return (
    <>
      <div>Portfolio... is in dev phase</div>
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
            : "Type 'portfolio'"
        }
        value=""
        cd=""
      />
    </>
  );
}

export default Portfolio;
