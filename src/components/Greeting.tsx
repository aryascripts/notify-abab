import React, { useState } from "react";

const now = () => new Date().toLocaleString();

export default function Greeting() {
  const [time, setTime] = useState(now());

  setInterval(() => setTime(now()), 1000);

  return (
    <div className="u-flexV u-centerBoth u-fullHeight">
      <h1>Hello, world!</h1>
      <p>{time}</p>
    </div>
  );
}
