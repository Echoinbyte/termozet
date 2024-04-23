import "../Styling/Awards.css";
import Prompt from "../Prompt";

function Awards() {
  const plcholder = Math.floor(Math.random() * 7);
  return (
    <>
      <div>Awards</div>
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

export default Awards;
