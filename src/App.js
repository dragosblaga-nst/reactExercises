import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Impresii from "./listaimpresii";
import FormImpresii from "./formimpresii";

export default function App() {
  const [lista, setLista] = useState([]);

  const adaugInlista = (impresie) => {
    const nr = lista.length + 1;
    impresie.id = nr; //  Adaug și câmpul id
    setLista([...lista, impresie]); //  JS, cursul 3, operatorul spread!
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Impresii</h1>
      <Impresii listaImpresii={lista} />
      <FormImpresii adaimp={adaugInlista} />
    </Container>
  );
}
