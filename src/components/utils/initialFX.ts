import gsap from "gsap";

export function initialFX() {
  const main = document.getElementsByTagName("main")[0];
  if (!main) return;
  main.classList.add("main-active");
  
  document.body.style.overflowY = "auto";
  
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const targets = [
    ".landing-info h3", 
    ".landing-intro h2", 
    ".landing-intro h1", 
    ".landing-h2-info", 
    ".landing-info-h2"
  ];
  const existingTargets = targets.filter(t => document.querySelector(t));
  
  if (existingTargets.length > 0) {
    gsap.fromTo(
      existingTargets,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: 0.3,
      }
    );
  }
  
  const headerTargets = [".header", ".icons-section", ".nav-fade"];
  const existingHeaders = headerTargets.filter(t => document.querySelector(t));
  if (existingHeaders.length > 0) {
    gsap.fromTo(
      existingHeaders,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  }
}
