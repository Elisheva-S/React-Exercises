import { useState } from "react";

export default function Exe2() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  function ChangeMinute(time) {
    return (
      <div>
        {time === "hour" ? setMinute(hour * 60) : setMinute(second / 60)}
      </div>
    );
  }
  function ChangeSecond(time) {
    return (
      <div>
        {time === "hour" ? setSecond(hour * 3600) : setSecond(minute * 60)}
      </div>
    );
  }
  function ChangeHour(time) {
    return (
      <div>
        {time === "minute" ? setHour(minute / 60) : setHour(second / 3600)}
      </div>
    );
  }
  return (
    <>
      <h1>Time unit converter</h1>
      <hr />
      <> hours: </>
      <input
        type={Text}
        value={hour}
        onChange={(e) => {
          setHour(e.target.value);
        }}
        onMouseLeave={() => {
          ChangeMinute("hour");
          ChangeSecond("hour");
        }}
      ></input>
      <> minutes: </>
      <input
        type={Text}
        value={minute}
        onChange={(e) => {
          setMinute(e.target.value);
        }}
        onMouseLeave={() => {
          ChangeHour("minute");
          ChangeSecond("minute");
        }}
      ></input>
      <> seconds: </>
      <input
        type={Text}
        value={second}
        onChange={(e) => {
          setSecond(e.target.value);
        }}
        onMouseLeave={() => {
          ChangeHour("second");
          ChangeMinute("second");
        }}
      ></input>
      <h6></h6>
      <button
        onClick={() => {
          setHour(0);
          setMinute(0);
          setSecond(0);
        }}
      >
        Clear
      </button>
    </>
  );
}
