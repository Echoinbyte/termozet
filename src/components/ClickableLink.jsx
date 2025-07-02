import PropTypes from "prop-types";

const ClickableLink = ({ url, children, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      url.startsWith("http") ? url : `https://${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer text-blue-400 hover:text-blue-300 hover:underline ${className}`}
      style={{
        color: "#6699FF",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = "underline";
        e.target.style.color = "#88AAFF";
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = "none";
        e.target.style.color = "#6699FF";
      }}
    >
      {children || url}
    </span>
  );
};

ClickableLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ClickableLink;
