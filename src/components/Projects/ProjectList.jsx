import React, {useState} from 'react'
import ProjectPage from './ProjectPage'
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function ProjectList() {
  const [value, setValue] = useState("NewU");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="regular-page">
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab
            label="New U"
            value="NewU"
            sx={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="TeamDex"
            value="TeamDex"
            sx={{ color: "white", fontSize: "20px" }}
          />
        </TabList>
        <ProjectPage name={value} />
      </TabContext>
    </section>
  )
}

export default ProjectList