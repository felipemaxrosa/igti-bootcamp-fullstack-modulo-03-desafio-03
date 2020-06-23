import React from "react";

export default function Spinner() {
  return (
    <div className="container">
      <h4>Carregando...</h4>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}
