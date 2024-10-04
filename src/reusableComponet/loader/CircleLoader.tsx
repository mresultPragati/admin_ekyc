import React from "react";
import { LoaderDiv, RoundLoader } from "./LoaderStyled";

const CircleLoader = () => {
  return (
    <>
      <LoaderDiv className="d-flex justify-content-center">
        <RoundLoader></RoundLoader>
      </LoaderDiv>
    </>
  );
};

export default CircleLoader;
