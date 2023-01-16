import { useState } from "react";
import App from "./App";
export default function Exe1() {
  const [val, setVal] = useState("Type here something...");
  function ChangeVal(e) {
    setVal(e.target.value);
  }
  return (
    <>
      <hr />
      <input type={Text} value={val} onChange={ChangeVal}></input>
      <hr />
      <input type={Text} value={val} onChange={ChangeVal}></input>
      <hr />
      <input type={Text} value={val} onChange={ChangeVal}></input>
      <hr />
      <input type={Text} value={val} onChange={ChangeVal}></input>
      <hr />
      <input type={Text} value={val} onChange={ChangeVal}></input>
    </>
  );
}
