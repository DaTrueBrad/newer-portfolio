import { Typography } from "@mui/material";
import React from "react";
import brady from "../../assets/Brady.jpg";
import { images } from "../../assets/imagesList";

function SecondSection() {
  return (
    <section>
      <div className="info-container">
        <img src={brady} className="brady-img" />
        <div className="information">
          <div>
            <Typography variant="h2" align="center" color="white">
              I'm a{" "}
              <Typography variant="span" color="primary.main">
                React Developer
              </Typography>
            </Typography>
            <Typography variant="h5" color="white" align="center">
              Hi, I'm Brady! I'm currently a React Tech Lead for DevMountain in Lehi, UT. My favorite part of my job is that I get to work with individuals who are leaving their previous field and coming into web development for the first time!
              <br></br>
              <br></br>
              I spend my day coding with students or coding on personal projects. Outside of code, I exercise, hike, read, and play games!
            </Typography>
          </div>
          <div className="images-container">
            {images.map((image, index) => {
              return (
                <div className="image-card" key={index}>
                  <img src={image.url} loading="lazy" />
                  <Typography variant="h5" color="text.main">
                    {image.lang}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
