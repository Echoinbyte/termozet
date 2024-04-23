import Prompt from "../Prompt";
import "../Styling/Ls.css";

function Ls() {
  let cmdlist = [
    {
      cmd: ".help",
      action: "To get",
      middle: "help with the",
      domain: "terminal",
      tail: "",
    },
    {
      cmd: "reload",
      action: "To reload",
      middle: "the entire",
      domain: "WebPage",
      tail: "Same as Cls",
    },
    {
      cmd: "~ENTERKEY~",
      action: "To reload",
      middle: "the entire",
      domain: "WebPage",
      tail: "Shothand for reload",
    },
    {
      cmd: "portfolio",
      action: "To see",
      middle: "my terminal based",
      domain: "portfolio",
      tail: "WebPage",
    },
    {
      cmd: "ls",
      action: "To print",
      middle: "all the",
      domain: "Commands",
      tail: "",
    },
    {
      cmd: "about",
      action: "To view",
      middle: "information about",
      domain: "me",
      tail: "My background, skills, and interests",
    },
    {
      cmd: "contact",
      action: "To get in touch",
      middle: "with",
      domain: "me",
      tail: "Contact details and social media links",
    },
    {
      cmd: "projects",
      action: "To explore",
      middle: "my",
      domain: "projects",
      tail: "Links to my projects and their descriptions",
    },
    {
      cmd: "awards",
      action: "To see",
      middle: "my",
      domain: "awards",
      tail: "Links to my certificates and achievements",
    },
    {
      cmd: "cd play",
      action: "To change dir to play",
      middle: "many",
      domain: "interesting games",
      tail: "",
    },
    {
      cmd: "play/easter",
      action: "To play",
      middle: "a very",
      domain: "interesting easter game",
      tail: "get a very great feast for free of cost",
    },
    {
      cmd: "cd social",
      action: "To change dir to check out social profiles",
      middle: "and follow me on",
      domain: "social media",
      tail: "",
    },
    {
      cmd: "social/repo",
      action: "To see",
      middle: "my repositories",
      domain: "on github",
      tail: "You will be get a link",
    },
    {
      cmd: "social/youtube",
      action: "To watch",
      middle: "my videos on",
      domain: "YouTube",
      tail: "Link to my YouTube channel",
    },
    {
      cmd: "social/instagram",
      action: "To view",
      middle: "my photos on",
      domain: "Instagram",
      tail: "Link to my Instagram profile",
    },
    {
      cmd: "social/facebook",
      action: "To connect with",
      middle: "me on",
      domain: "Facebook",
      tail: "Link to my Facebook profile",
    },
    {
      cmd: "social/twitter",
      action: "To follow",
      middle: "me on",
      domain: "Twitter",
      tail: "Link to my Twitter profile",
    },
  ];

  const plcholder = Math.floor(Math.random() * 7);

  return (
    <>
      <ul className="list-container">
        {cmdlist.map((list, index) => (
          <li key={index} className="list-item">
            <span className="cmd">{list.cmd}</span> :{" "}
            <span className="action">{list.action}</span> {list.middle}{" "}
            <span className="domain">{list.domain}</span>!{" "}
            <span className="tail">{list.tail}</span>
          </li>
        ))}
      </ul>

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

export default Ls;
