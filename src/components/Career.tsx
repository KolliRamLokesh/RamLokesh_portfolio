import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>MLR Institute of Technology</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              2nd-year student pursuing Bachelor of Technology in Computer Science.
              Actively building real-world projects and exploring software solutions
              that create meaningful impact.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Innovation Challenge Certificate</h4>
                <h5>MLR Institute of Technology</h5>
              </div>
              <h3>1st Year</h3>
            </div>
            <p>
              Achieved recognition in the Innovation Challenge during the 1st year,
              demonstrating problem-solving skills and creative thinking through
              practical project work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
