import Prompt from '../Prompt';
import '../Styling/About.css';

const About = () => {
  const plcholder = Math.floor(Math.random() * 7);
  return (
    <>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
          <div className="terminal-title">About Me</div>
        </div>
        <div className="terminal-body">
          <div className="about-content">
            <section id="about">
              <div className="about">
                <div className="about_info">
                  <h2
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="600"
                  >
                    Sambhav Aryal
                  </h2>
                  <h3
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="800"
                  >
                    Hi I am <span>MERN Stack</span> Developer
                  </h3>
                  <p
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                  >
                    At just 15 years old, I&apos;m not only deeply engaged in
                    mastering the MERN stack but have also showcased my talents
                    through participation in prestigious events like Codeworks
                    (7th) and Science exhibitions (1st), where I proudly secured
                    the phenomenal position. With a track record of academic
                    excellence, including standing first in class and achieving
                    a remarkable 3.93 GPA in the BLE exam, I am dedicated to
                    pushing boundaries and making meaningful contributions in
                    the world of technology.
                  </p>
                  <button
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="1200"
                  >
                    Download C.V.
                  </button>
                </div>
              </div>
            </section>
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
            : "Type 'projects'"
        }
        value=""
        cd=""
      />
    </>
  );
}

export default About;
