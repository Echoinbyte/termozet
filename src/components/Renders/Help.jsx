import Prompt from "../Prompt";
import "../Styling/Help.css";

function Help() {

  return (
    <div className="help-container">
      <dl className="help-list">
        <dt className="help-list-item">
          <span className="help-command">Type commands</span>
        </dt>
        <dd className="help-list-item">
          Type Various inbuit commands in the place where a cursor is blinking.
        </dd>

        <dt className="help-list-item">
          <span className="help-command">Cursor Not Blinking?</span>
        </dt>
        <dd className="help-list-item">
          If Cursor is not blinking, You can reload the page or type command
          &rarr; <span style={{ color: "#66FF66" }}>reload</span>
        </dd>

        <dt className="help-list-item">
          <span className="help-command">Don&rsquo;t Know Commands?</span>
        </dt>
        <dd className="help-list-item">
          Simply Type &rarr; <span style={{ color: "#66FF66" }}>ls</span> in
          command line! to know Reserved Commands
        </dd>

        <dt className="help-list-item">
          <span className="help-command">Reserved Commands?</span>
        </dt>
        <dd className="help-list-item">
          Reserved Commands are functional, that means they perform certain
          function. Reserved Commands will be coloured as{" "}
          <span style={{ color: "#66FF66" }}>#66FF66</span> And other
          non-functional text will be coloured as{" "}
          <span style={{ color: "#FF6666" }}>#FF6666</span>, When typing in the
          command line
        </dd>

        <dt className="help-list-item">
          <span className="help-command">Things to Know</span>
        </dt>
        <dd className="help-list-item">
          When you&rsquo;re Typing and If any command is coloured as{" "}
          <span style={{ color: "#66FF66" }}>#66FF66</span>, Try not to add any
          spaces( ), period (.) or anything. Simply press &lsquo;{" "}
          <span style={{ color: "#66FF66" }}>Enter</span> &rsquo; key
        </dd>
        <dd className="help-list-item">
          All the comands are in lowercase. So, please type everything in
          lowercase.
        </dd>
        <dd className="help-list-item">
          If you face any problem, try &lsquo;{" "}
          <span style={{ color: "#66FF66" }}>contact</span> &rsquo; command to
          make us aware about the problem and Simply reload the page or type
          &lsquo; <span style={{ color: "#66FF66" }}>reload</span> &rsquo;
          command to reload the page
        </dd>

        <dt className="help-list-item">
          <span className="help-command">Enjoy?</span>
        </dt>
        <dd className="help-list-item">
          Type &rarr; <span style={{ color: "#66FF66" }}>play/easter</span> in
          command line! to play a very interesting easter game, where you need
          to find multiple puzzle letters, order them and type them in command
          line to get a very great feast for{" "}
          <span style={{ color: "#66FF66" }}>free of cost</span>!{" "}
        </dd>
        
      </dl>

      <Prompt
        placeholder={"Type &rarr; 'ls'"}
        value=""
        cd=""
      />
    </div>
  );
}

export default Help;
