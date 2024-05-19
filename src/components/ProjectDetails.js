import React from 'react';


const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={require(`../images/${project.image}`).default}
              className="img-fluid mb-3"
              alt={project.title}
            />
            <p>{project.details}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
