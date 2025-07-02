import Prompt from "../Prompt";
import "../Styling/Contact.css";

function Contact() {
  const plcholder = Math.floor(Math.random() * 7);
  return (
    <>
      <div className="contact-window">
        <div className="contact-header">
          <span className="contact-button red"></span>
          <span className="contact-button yellow"></span>
          <span className="contact-button green"></span>
          <div className="contact-title">Contact Me</div>
        </div>
        <div className="contact-body">
          <div className="about-content">
            {/* <img className="profile-picture" src="your_profile_picture_url.jpg" alt="Your Name" /> */}
            <div className="profile-info">
              <h2>HashZennn</h2>
              <p>Butwal , Lumbini</p>
              <p>
                Email:{" "}
                <a href="mailto:hashzennn@gmail.com">hashzennn@gmail.com</a>
              </p>
              <p>Phone: +977 (PRIVATE_NO)</p>
            </div>
          </div>
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
            : "Type 'portfolio'"
        }
        value=""
        cd=""
      />
    </>
  );
}

export default Contact;
