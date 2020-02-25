import React, { useContext } from "react";
import { UserContext } from "../userContext";

// This component displays name from Context
const Name = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        <strong> </strong> {user.sex}
        <strong> </strong> {user.name}
        <strong> </strong> {user.surname}

      </h2>
    </div>
  );
};

export default Name;
