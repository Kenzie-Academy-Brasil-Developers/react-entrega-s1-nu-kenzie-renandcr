import "./index.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState();
  const [value, setValue] = useState();
  const [id, setId] = useState(0);

  function addNewItem() {
    const item = { description, type, value, id };
    console.log(typeof item.value);
    if (item.type === "Despesas") {
      item.value *= -1;
    }
    setId(id + 1);

    setListTransactions([...listTransactions, item]);
  }

  return (
    <div>
      <div className="form-div">
        <div className="form-div-input">
          <span className="form-span-description">Descrição</span>
          <input
            name="description"
            className="form-unput"
            placeholder="Digite aqui sua descrição"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-div-span">
          <span>Valor</span>
          <span>Tipo de valor</span>
        </div>
        <div className="form-div-value">
          <input
            name="value"
            className="form-input-value"
            placeholder="R$"
            type="number"
            onChange={(event) => setValue(Number(event.target.value))}
          />
          <select
            className="form-select-value"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="">Selecione</option>
            <option value="Entrada" label="Entrada"></option>
            <option value="Despesas" label="Despesas"></option>
          </select>
        </div>
        <button className="form-button" onClick={() => addNewItem()}>
          Inserir valor
        </button>
      </div>
    </div>
  );
}

export default Form;
