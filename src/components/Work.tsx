import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Underground Drainage Monitor",
    category: "IoT & Automation",
    description: "An IoT-powered system that automatically detects blockages in underground drainage lines and clears them — without any human involvement. The system monitors flow in real-time and triggers a clearing mechanism before blockages impact the drainage flow.",
    tools: "IoT Sensors, Embedded Systems, Real-time Monitoring, Automation, Hardware Integration",
    image: "",
    link: "",
  },
  {
    title: "Eco-Cluster",
    category: "Environmental Intelligence",
    description: "A smart land analysis platform that identifies abandoned or underutilized land and intelligently determines whether the area should be monitored, used for agriculture, or protected as a conservation zone — helping drive sustainable land management decisions.",
    tools: "HTML, CSS, JavaScript, Leaflet.js, GeoJSON, GitHub Pages",
    image: "",
    link: "https://kolliramlokesh.github.io/Eco-Cluster/",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              className="carousel-slide" 
              key={index} 
              style={{ 
                borderBottom: index < projects.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', 
                padding: '60px 0' 
              }}
            >
              <div className="carousel-content">
                <div className="carousel-info">
                  <div className="carousel-number">
                    <h3>0{index + 1}</h3>
                  </div>
                  <div className="carousel-details">
                    <h4>{project.title}</h4>
                    <p className="carousel-category">
                      {project.category}
                    </p>
                    <div className="carousel-description-box">
                      {project.description}
                    </div>
                    <div className="carousel-tools">
                      <span className="tools-label">Tools & Features</span>
                      <p>{project.tools}</p>
                    </div>
                    {project.link && (
                      <div className="carousel-live-link">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <span>Live Preview</span>
                          <MdArrowOutward />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                {project.image && (
                  <div className="carousel-image-wrapper">
                    <WorkImage image={project.image} alt={project.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
