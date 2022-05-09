import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function ResumeTimeline() {
  let screen = window.innerWidth;
  console.log(screen);
  return (
    <section className="regular-page overflow">
      <Timeline
        position={screen <= 600 ? "right" : "alternate"}
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            align="right"
            variant="h4"
            color="primary.main"
          >
            Current -<br></br>
            December 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <ComputerIcon size="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              Current -<br></br>
              December 2021
            </Typography>
            <Typography variant="h5" color="primary">
              Devmountain
            </Typography>
            <Typography variant="h6" color="text.main">
              React Tech Lead
            </Typography>
            <Typography variant="p" color="text.main">
              Responsabilities include guiding students through a PERN
              curriculum, helping brainstorm with students about projects, bug
              solutions, debugging, and providing interactive lectures for
              students on various topics. Assisted with creation of new lecture
              material as well as solutions provided to exercise
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            align="right"
            variant="h4"
            color="text.main"
          >
            July 2021 -<br></br>
            October 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon size="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              color="text.main"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              July 2021 -<br></br>
              October 2021
            </Typography>
            <Typography variant="h5" color="primary">
              Devmountain
            </Typography>
            <Typography variant="h6" color="text.main">
              Web Dev Student
            </Typography>
            <Typography variant="p" color="text.main">
              I attended Devmountain for 16 weeks to learn the PERN stack for
              web development. I built two larger projects during this time, but
              it was simply the tip of the iceberg of what was to come.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            align="right"
            variant="h4"
            color="text.main"
          >
            November 2020 -<br></br>
            July 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FitnessCenterIcon size="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              color="text.main"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              Nov. 2020 -<br></br>
              July 2021
            </Typography>
            <Typography variant="h5" color="primary">
              VASA Fitness
            </Typography>
            <Typography variant="h6" color="text.main">
              Fitness Manager
            </Typography>
            <Typography variant="p" color="text.main">
              Responsabilities included Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus cumque reiciendis, ut ea numquam
              iusto perspiciatis, eius temporibus alias nulla rem quia et illo
              accusamus neque eveniet rerum animi, ratione dolor eaque
              voluptatem laudantium dolorem! Voluptas at deleniti sit maiores,
              sapiente architecto nulla tenetur! Delectus mollitia unde
              quibusdam voluptatum reiciendis, sint laborum impedit est
              cupiditate quam culpa deserunt? Non, dolores! Explicabo, obcaecati
              minima suscipit facilis illo reiciendis beatae nesciunt ea saepe
              quibusdam hic fugiat pariatur amet dignissimos alias consectetur,
              ipsum necessitatibus reprehenderit quia ex veniam? Et cumque
              doloremque suscipit dolore nisi pariatur ad optio quidem voluptate
              quos magni, doloribus tempora?
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            align="right"
            variant="h4"
            color="text.main"
          >
            April 2019 -<br></br>
            March 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FitnessCenterIcon size="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography
              variant="h4"
              color="text.main"
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              April 2019 -<br></br>
            March 2020
            </Typography>
            <Typography variant="h5" color="primary">
              VASA Fitness
            </Typography>
            <Typography variant="h6" color="text.main">
              Fitness & Sales Manager
            </Typography>
            <Typography variant="p" color="text.main">
              Responsabilities included Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus cumque reiciendis, ut ea numquam
              iusto perspiciatis, eius temporibus alias nulla rem quia et illo
              accusamus neque eveniet rerum animi, ratione dolor eaque
              voluptatem laudantium dolorem! Voluptas at deleniti sit maiores,
              sapiente architecto nulla tenetur! Delectus mollitia unde
              quibusdam voluptatum reiciendis, sint laborum impedit est
              cupiditate quam culpa deserunt? Non, dolores! Explicabo, obcaecati
              minima suscipit facilis illo reiciendis beatae nesciunt ea saepe
              quibusdam hic fugiat pariatur amet dignissimos alias consectetur,
              ipsum necessitatibus reprehenderit quia ex veniam? Et cumque
              doloremque suscipit dolore nisi pariatur ad optio quidem voluptate
              quos magni, doloribus tempora?
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0", display: {
              xs: 'none',
              sm: 'block'
            } }}
            align="right"
            variant="h4"
            color="text.main"
          >
            July 2018 -<br></br>
            April 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FitnessCenterIcon size="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h4" color="text.main" sx={{display: {
              xs: 'block',
              sm: 'none'
            }}}>July 2018 -<br></br>
            April 2019</Typography>
            <Typography variant="h5" color="primary">
              VASA Fitness
            </Typography>
            <Typography variant="h6" color="text.main">
              Personal Trainer
            </Typography>
            <Typography variant="p" color="text.main">
              Responsabilities included Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus cumque reiciendis, ut ea numquam
              iusto perspiciatis, eius temporibus alias nulla rem quia et illo
              accusamus neque eveniet rerum animi, ratione dolor eaque
              voluptatem laudantium dolorem! Voluptas at deleniti sit maiores,
              sapiente architecto nulla tenetur! Delectus mollitia unde
              quibusdam voluptatum reiciendis, sint laborum impedit est
              cupiditate quam culpa deserunt? Non, dolores! Explicabo, obcaecati
              minima suscipit facilis illo reiciendis beatae nesciunt ea saepe
              quibusdam hic fugiat pariatur amet dignissimos alias consectetur,
              ipsum necessitatibus reprehenderit quia ex veniam? Et cumque
              doloremque suscipit dolore nisi pariatur ad optio quidem voluptate
              quos magni, doloribus tempora?
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default ResumeTimeline;
