import React from "react";
function UserInputs(props) {
  const style = {
    padding: "15px",
    backgroundColor: "#eee",
    margin: "16px",
  };
  return (
    <div>
      <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentUserName}
      />
    </div>
  );
}

export default UserInputs;
