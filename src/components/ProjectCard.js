import React from "react";

const ProjectCard = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: "url(https://secure-images.bridestory.com/image/upload/v1458716392/banner/opengraph/tagline.png)" }}></div>
      <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="card-content">{description}</div>
      </div>
    </div>

  )
}

export default ProjectCard;