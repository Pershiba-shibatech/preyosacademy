import TimezoneSelect from "react-timezone-select";

const TimeZone = ({ value, onChange, dispatch }) => {


  return (
    <TimezoneSelect value={value} onChange={(e) => { console.log(e); dispatch(onChange(e.value)) }} />
  );
};

export default TimeZone;
