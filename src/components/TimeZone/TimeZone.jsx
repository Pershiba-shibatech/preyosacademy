import { useState } from "react";
import TimezoneSelect from "react-timezone-select";

const TimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState();


  const settimeZone = (e) => {
    console.log(e);
    setSelectedTimezone(e)
  
  };

  return (
    <TimezoneSelect value={selectedTimezone} onChange={(e) => settimeZone(e)} />
  );
};

export default TimeZone;
