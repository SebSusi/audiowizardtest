import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { Button } from "react-bootstrap"
import LinkButton from "./linkButton"

// This component displays name from Context
const Sex = () => {
  const user = useContext(UserContext);
    console.log(user)
  return (
    <div style={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
      <h2 className="is-size-4">
      <LinkButton style={{ margin:"10px 20px"}} to="/name/" onClick={e => user.setSex("Monsieur")}>Homme</LinkButton>
      <LinkButton to="/name/" onClick={e => user.setSex("Madame")}> Femme </LinkButton>
      </h2>
    </div>
  );
};

export default Sex;
