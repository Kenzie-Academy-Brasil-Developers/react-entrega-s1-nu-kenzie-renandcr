import "./index.css";

export const Menu = ({ filterEntries, filterExpenses }) => {
  return (
    <div className="menu-div-parent">
      <h3>Resumo Financeiro</h3>
      <div className="menu-div-button">
        <button className="menu-button-all menu-button-todos">Todos</button>
        <button
          onClick={() => filterEntries()}
          className="menu-button-all menu-button-entradas"
        >
          Entradas
        </button>
        <button
          onClick={() => filterExpenses()}
          className="menu-button-all menu-button-despesas"
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export const Warning = () => {
  return (
    <div className="menu-div-warning">
      <h2>Você ainda não possui nenhum lançamento</h2>
    </div>
  );
};
