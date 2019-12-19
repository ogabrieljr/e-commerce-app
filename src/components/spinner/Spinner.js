import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./style";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <div className="loader"></div>
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
