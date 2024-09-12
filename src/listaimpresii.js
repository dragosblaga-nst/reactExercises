import React from "react";
import Impresie from "./impresie";

const ListaImpresii = (props) => {
  const lista = props.listaImpresii.map((item) => (
    <Impresie titlu={item.titlu} text={item.text} key={item.id} />
  ));

  return lista;
};

export default ListaImpresii;
