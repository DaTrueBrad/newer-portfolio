import { Typography } from "@mui/material";
import React from "react";
import projects from "../../assets/projects";

function ProjectPage({ name }) {
  return (
    <section className="regular-page">
      <Typography variant="h2" color="primary">
        {projects[name].name}
      </Typography>
      <div className="row">
        <iframe
          className="project-video"
          width="560"
          height="315"
          src={projects[name].video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
          <Typography variant="h5" align="center" color="text.main">
            {projects[name].description}
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
