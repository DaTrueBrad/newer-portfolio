import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import tutorials from "../../assets/tutorials";
import { ExpandMore } from "@mui/icons-material";

function VideoPage({ name }) {
  const display = tutorials[name].map((item, index) => {
    return (
      <Accordion
        sx={{
          width: {
            xs: "100%",
            sm: "95%",
            md: "90%",
          },
        }}
        key={index}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h4"
            color="text.main"
            sx={{
              fontSize: {
                xs: "1.5em",
                sm: "2em",
              },
            }}
          >
            {item.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row-container">
            <iframe
              // width="560"
              // height="315"
              src={item.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });

  return <section className="regular-page overflow">{display}</section>;
}

export default VideoPage;
