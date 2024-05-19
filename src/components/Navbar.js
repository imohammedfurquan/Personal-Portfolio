import React from 'react';

const Navbar = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'Mohammed_Furquan_Resume.pdf';
    downloadLink.download = 'Mohammed_Furquan_Resume.pdf';
    downloadLink.click();
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; 
      const topPos = element.offsetTop - offset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-info fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">MohammedFurquan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link mx-5" href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" href="#project" onClick={() => scrollToSection('project')}>Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-info" onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
