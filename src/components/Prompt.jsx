import { useRef, useEffect, useState } from "react";
import "./Prompt.css";
import Help from "./Renders/Help";
import Repo from "./Renders/Social_repo";
import Error from "./Renders/Error";
import FalseValue from "./Renders/FalseValue";
import Ls from "./Renders/Ls";
import Social from "./Renders/Cd-Social";
import Play from "./Renders/Cd-Play";
import Dot from "./Renders/Cd-dot";
import Portfolio from "./Renders/Portfolio";
import Contact from "./Renders/Contact";
import About from "./Renders/About";
import Projects from "./Renders/Projects";
import Awards from "./Renders/Awards";
import Youtube from "./Renders/Social_Youtube";
import Easter from "./Renders/Play_easter";
import PropTypes from "prop-types";

function Prompt(props) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (!render) {
      inputRef.current.focus();
      const handleClickOutsideInput = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          inputRef.current.focus();
        }
      };
      document.addEventListener("click", handleClickOutsideInput);
      return () => {
        document.removeEventListener("click", handleClickOutsideInput);
      };
    }
  }, []);

  const keywords = [
    "portfolio",
    "ls",
    ".help",
    "reload",
    "",
    "projects",
    "contact",
    "about",
    "awards",
    "cd social",
    "social/youtube",
    "social/repo",
    "cd play",
    "play/easter",
    "social/..",
    "play/..",
  ];
  const [value, setValue] = useState("");
  const [effect, setEffect] = useState("");
  const [render, setRender] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    setEffect("");
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Input value submitted:", value);
    if (keywords.includes(value)) {
      if (value == ".help") {
        setRender(<Help />);
      } else if (value == "") {
        window.location.reload();
      } else if (value == "ls") {
        setRender(<Ls />);
      } else if (value == "portfolio") {
        setRender(<Portfolio />);
      } else if (value == "about") {
        setRender(<About />);
      } else if (value == "contact") {
        setRender(<Contact />);
      } else if (value == "projects") {
        setRender(<Projects />);
      } else if (value == "awards") {
        setRender(<Awards />);
      } else if (value == "reload") {
        window.location.reload();
      } else if (value == "cd social") {
        setRender(<Social />);
      } else if (value == "social/repo") {
        setRender(<Repo />);
      } else if (value == "social/youtube") {
        setRender(<Youtube />);
      } else if (value == "cd play") {
        setRender(<Play />);
      } else if (value == "play/easter") {
        setRender(<Easter />);
      } else if (value == "social/.." || value == "play/..") {
        setRender(<Dot />);
      } else {
        setRender(<FalseValue value={value} />);
      }
    } else {
      setRender(<Error value={value} />);
    }
  };

  return (
    <>
      <div className="prompt">
        <h2>
          <span className="device">flame</span>@
          <span className="model">Nitro{props.cd}</span>
          :$ ~
        </h2>
        &nbsp;
        <span className="effect">{effect}</span>
        <input
          placeholder={props.placeholder}
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={value || props.value}
          onKeyDown={handleKeyDown}
          style={{
            color: keywords.includes(value) ? "#66FF66" : "#FF6666",
          }}
        />
      </div>

      <div className="renderitem">{render}</div>
    </>
  );
}

Prompt.propTypes = {
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.any.isRequired,
  cd: PropTypes.any.isRequired,
};

export default Prompt;
