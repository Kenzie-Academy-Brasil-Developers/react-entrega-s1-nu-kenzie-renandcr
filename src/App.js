import ButtonTrash from "./assets/img/ButtonTrash.png";
import SetaSelect from "./assets/img/seta.png";
import NuKenzie from "./assets/img/NuKenzie.png";
import nuKenzieWhite from "./assets/img/nuKenzieWhite.png";
import HomeImg from "./assets/img/imgHome.png";
import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Header from "./Components/Header/Header";
import TotalMoney from "./Components/TotalMoney";
import { Menu, Warning } from "./Components/Menu";
import { CardEmpty } from "./Components/Card/Card";
import { HomePage } from "./Components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const [page, setPage] = useState(true);

  console.log(listTransactions);

  const removeItems = (item) => {
    const filterItems = listTransactions.filter(
      (itemCurrent) => itemCurrent.id !== item.id
    );

    setListTransactions(filterItems);
  };

  const filterEntries = () => {
    const filterItems = listTransactions.filter(
      (itemCurrent) => itemCurrent.type === "Entrada"
    );
    setListTransactions(filterItems);
  };

  const filterExpenses = () => {
    const filterItems = listTransactions.filter(
      (itemsCurrent) => itemsCurrent.type === "Despesas"
    );
    setListTransactions(filterItems);
  };

  if (page) {
    return (
      <div className="App">
        <HomePage
          HomeImg={HomeImg}
          NuKenzie={nuKenzieWhite}
          setPage={setPage}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Header img={NuKenzie} setPage={setPage} />
      <main>
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            SetaSelect={SetaSelect}
          />

          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>
        <section>
          <Menu filterEntries={filterEntries} filterExpenses={filterExpenses} />

          {listTransactions.length === 0 && <Warning />}

          {listTransactions.length === 0 ? (
            <CardEmpty />
          ) : (
            <List
              listTransactions={listTransactions}
              ButtonTrash={ButtonTrash}
              removeItems={removeItems}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
