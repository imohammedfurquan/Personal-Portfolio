import React from 'react';

const Project = ({ projects }) => {
  return (
    <div className="container my-5 " id='project'>
      <h2 className='text-info text-center my-5'>My Projects</h2>
      <div className="row mt-6">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mb-5">
            <div className="card">
              <img
                src={String(project.image)}
                className="card-img-top"
                alt={project.title}
              />
  
              <div className="card-body bg-dark">
                <h5 className="card-title text-info">{project.title}</h5>
                <p className="card-text" style={{color:"#b5f7ff"}}>{project.description}</p>
                <button className='btn btn-sm btn-outline-info ' onClick= {()=>{
                  var linkToVisit=project.liveDemo;
                  window.location.href=linkToVisit;

                }}>Live Demo</button>
                <button className='btn btn-sm btn-outline-info mx-3' onClick= {()=>{
                  var linkToGit=project.githubRepo;
                  window.location.href=linkToGit;

                }}>GitHub Repo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
