import React, { useState } from "react";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ResumePage from "./ResumePage";
import ResumeTimeline from "./ResumeTimeline";

function ResumeTabs() {
  const [value, setValue] = useState("Timeline");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="regular-page">
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
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
      </TabList>
      {/* <ResumePage name={value} /> */}
      <TabPanel value="Timeline" className="overflow">
        <ResumeTimeline />
      </TabPanel>
    </TabContext>
  </section>
  )
}

export default ResumeTabs