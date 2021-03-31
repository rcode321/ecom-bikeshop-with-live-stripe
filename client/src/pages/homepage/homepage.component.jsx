import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";
import Hero from "../../components/hero/hero.component";
import "./homepage-styles.scss";

const Homepage = () => (
  <div className="homepage-container">
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Hero />
      <Directory />
    </Profiler>
  </div>
);

export default Homepage;
