import React, { useState } from "react";
import { Button, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ResumePage from "./ResumePage";
import ResumeTimeline from "./ResumeTimeline";
import resume from "../../assets/resume.pdf";
import Construction from "../Construction";

function ResumeTabs() {
  const [value, setValue] = useState("Timeline");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const display = () => {
    switch (value) {
      case "Timeline":
        return <ResumeTimeline />;
      default:
        return null;
    }
  };

  return (
    <section className="regular-page overflow">
      <Button
        variant="contained"
        href={resume}
        sx={{
          marginBottom: "15px",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
        download="BradyResume.pdf"
      >
        Download PDF
      </Button>
      <TabContext value={value}>
      <TabList
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          allowScrollButtonsMobile
          aria-label="lab API tabs example"
          sx={{ width: "100%", display: {
            xs: "flex",
            sm: "none",
            md: "none"
          } }}
          // centered
        >
          <Tab
            label="Timeline"
            value="Timeline"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Web Developer"
            value="Web Developer"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Fitness"
            value="Fitness"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Books"
            value="Books"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Button
            variant="contained"
            href={resume}
            sx={{
              minWidth: "170px",
              marginBottom: "13px",
              display: {
                xs: "none",
                sm: "none",
                md: "inline-block",
              },
            }}
            download="BradyResume.pdf"
          >
            Download PDF
          </Button>
        </TabList>
        <TabList
          onChange={handleChange}
          // variant="scrollable"
          // scrollButtons={true}
          // allowScrollButtonsMobile
          aria-label="lab API tabs example"
          sx={{ width: "100%", display: {
            xs: "none",
            sm: 'block',
            md: "block"
          } }}
          centered
        >
          <Tab
            label="Timeline"
            value="Timeline"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Web Developer"
            value="Web Developer"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Fitness"
            value="Fitness"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Books"
            value="Books"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Button
            variant="contained"
            href={resume}
            sx={{
              minWidth: "170px",
              marginBottom: "13px",
              display: {
                xs: "none",
                sm: "none",
                md: "inline-block",
              },
            }}
            download="BradyResume.pdf"
          >
            Download PDF
          </Button>
        </TabList>
        <TabPanel
          variant="section"
          value="Timeline"
          className="overflow">
          <ResumeTimeline />
        </TabPanel>
        <TabPanel
          variant="section"
          value="Web Developer"
          className="overflow">
          <Construction />
        </TabPanel>
        <TabPanel
          variant="section"
          value="Fitness"
          className="overflow">
          <Construction />
        </TabPanel>
        <TabPanel
          variant="section"
          value="Books"
          className="overflow">
          <Construction />
        </TabPanel>
      </TabContext>
    </section>
  );
}

export default ResumeTabs;
