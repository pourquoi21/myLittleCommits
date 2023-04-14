import React from "react";

export default function ShutDownPage(props) {
  return (
    <div
      className="shutdown_page"
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,1)",
        color: "white",
      }}
    >
      <p>
        이제 컴퓨터를
        <br />
        끄셔도 됩니다.
      </p>
    </div>
  );
}
