import React from 'react';
import LandingpageActions from "./LandingpageActions";
import LandingpageTitle from "./LandingpageTitle";

function LandingpageHeader() {
  return (
    <header className='margin-top--xl'>
        <LandingpageTitle />
        <LandingpageActions />
    </header>
  )
}

export default LandingpageHeader