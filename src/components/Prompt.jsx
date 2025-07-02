import { useRef, useEffect, useState } from "react";
import "./Prompt.css";
import Help from "./Renders/Help";
import Error from "./Renders/Error";
import FalseValue from "./Renders/FalseValue";
import Ls from "./Renders/Ls";
import Portfolio from "./Renders/Portfolio";
import Contact from "./Renders/Contact";
import About from "./Renders/About";
import Awards from "./Renders/Awards";
import Youtube from "./Renders/Social_Youtube";
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
    "help",
    ".help",
    "reload",
    "",
    "contact",
    "about",
    "awards",
    "social",
    "social/github",
    "social/youtube",
    "social/linkedin",
    "social/x",
    "social/facebook",
    "social/npm",
    "skills",
    "experience",
    "blog",
    "home",
    "figlet",
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
      if (value == "help" || value == ".help") {
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
      } else if (value == "awards") {
        setRender(<Awards />);
      } else if (value == "reload") {
        window.location.reload();
      } else if (value == "social/youtube") {
        setRender(<Youtube />);
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
