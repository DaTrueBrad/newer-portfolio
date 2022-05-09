import React, {useEffect} from "react";
import FirstLanding from "./FirstLanding";
import SecondSection from "./SecondSection";

function Main() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <main>
      <FirstLanding />
      <SecondSection />
    </main>
  );
}

export default Main;
