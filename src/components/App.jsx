import React from "react";

function App() {
  const now = new Date().toLocaleTimeString([], { hour12: false });
  const [time, setTime] = React.useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString([], { hour12: false });
    setTime(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
