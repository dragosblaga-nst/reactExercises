import React from "react";
import Alert from "react-bootstrap/Alert";

const Impresie = (props) => {
  //adaugatre props pentru adaugarea elementelor
  const stilAlert = {
    color: "#000",
    margin: "10px 0",
    border: "2px solid #F4F4F4",
    padding: "12px",
    borderRadius: "5px",
    boxShadow: "0 1px 1px 1px rgba(0,0,0,0.2)",
  };

  const stilHead = {
    font: "20px Arial, Helvetica, sans-serif",
    fontWeight: 700,
  };

  const titlu = props.titlu;
  const text = props.text;

  return (
    <Alert variant="light" style={stilAlert}>
      <Alert.Heading style={stilHead}>{titlu}</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

export default Impresie;
