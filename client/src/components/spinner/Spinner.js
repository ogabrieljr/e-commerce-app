import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./style";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <div className="loader" />
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
