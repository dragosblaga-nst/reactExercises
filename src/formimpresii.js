import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const FormImpresii = (props) => {
  const [titlu, setTitlu] = useState("");
  const [text, setText] = useState("");

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const impresie = {
      titlu: titlu,
      text: text,
    };
    props.adaimp(impresie);
    //  Golesc câmpurile formularului
    setTitlu("");
    setText("");
  };

  const stil = {
    marginTop: "2rem",
    backgroundColor: "#F4F4F4",
    padding: "15px",
    width: "750px",
  };

  return (
    <Container style={stil}>
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Titlul:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Impresie:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormImpresii;
