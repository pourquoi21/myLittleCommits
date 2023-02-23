import React from "react";

export default function StartLineClock() {
  const [time, setTime] = React.useState(new Date());

  function hours() {
    let hours = String(time.getHours() % 12);
    return (hours = hours.length == 1 ? "0" + hours : hours);
  }
  const mins = String(time.getMinutes()).padStart(2, "0");

  function AMPM() {
    if (new Date().getHours() >= 0 && new Date().getHours() < 12) return "오전";
    else return "오후";
  }

  React.useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="startLineTime"
      style={{
        width: "90px",
        height: "32px",
        padding: "0 5px",
        marginLeft: "auto",
        marginRight: "1.5px",
        boxSizing: "border-box",
        textAlign: "center",
        color: "#333",
        fontSize: "14px",
        borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
        borderTop: "2px solid rgba(0, 0, 0, 0.5)",
        borderRight: "2px solid rgba(255, 255, 255, 0.8)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.8)",
      }}
    >
      <div style={{ margin: "2px 0", boxSizing: "border-box" }}>
        {AMPM()} {hours()}:{mins}
      </div>
    </div>
  );
}
