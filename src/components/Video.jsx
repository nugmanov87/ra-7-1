import React from "react";
import DateTimePretty from "./DateTimePretty";

const Video = (props) => {
  return (
    <div className="video">
      <iframe src={props.url} allowFullScreen />
      <DateTimePretty date={props.date} />
    </div>
  );
};

export default Video;
