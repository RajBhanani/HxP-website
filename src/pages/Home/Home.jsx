import { Box } from "@mui/material";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";

import Banner from "./Home Components/Banner";
import ContentNavbar from "./Home Components/ContentNavbar";
import WhoWeAre from "./Home Components/WhoWeAre";
import WhatWeCanDo from "./Home Components/WhatWeCanDo";
import HowWeCanHelp from "./Home Components/HowWeCanHelp";
import WhyUs from "./Home Components/WhyUs";
import WhereWeCanHelp from "./Home Components/WhereWeCanHelp";
import WhenWeCanHelp from "./Home Components/WhenWeCanHelp";

const Home = () => {
  const sections = [
    { id: "who", component: <WhoWeAre /> },
    { id: "what", component: <WhatWeCanDo /> },
    { id: "how", component: <HowWeCanHelp /> },
    { id: "why", component: <WhyUs /> },
    { id: "where", component: <WhereWeCanHelp /> },
    { id: "when", component: <WhenWeCanHelp /> },
  ];

  const [activeSection, setActiveSection] = useState("banner");

  return (
    <Box>
      <Banner />
      <ContentNavbar activeSection={activeSection} />
      {sections.map((section) => {
        return (
          <InView
            key={section.id}
            threshold={0.5}
            onChange={(inView) => inView && setActiveSection(section.id)}
          >
            {({ ref }) => (
              <Box ref={ref} id={section.id}>
                {section.component}
              </Box>
            )}
          </InView>
        );
      })}
    </Box>
  );
};

export default Home;
