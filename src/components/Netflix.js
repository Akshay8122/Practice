import React from "react";

function Netflix({ seriesName }) {
  if (seriesName === "Family Man") {
    throw new Error("Not a Netflix series");
  }
  return <div>{seriesName}</div>;
}

export default Netflix;
