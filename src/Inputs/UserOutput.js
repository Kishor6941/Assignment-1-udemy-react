import React from "react";

function UserOutput(props) {
  const style = {
    width: "60%",
    backgroundColor: "#fff",
    border: "1px solid black",
    padding: "8px",
  };
  return (
    <div style={style}>
      <p>{props.userName}</p>
      <p>Hope you are doing well!!</p>
    </div>
  );
}

export default UserOutput;
