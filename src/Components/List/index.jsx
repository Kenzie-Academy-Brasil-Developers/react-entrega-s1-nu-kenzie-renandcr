import { Card, Card2 } from "../Card/Card";

const List = ({ listTransactions, ButtonTrash, removeItems, SetaSelect }) => {
  return (
    <ul>
      {listTransactions.map((current, index) =>
        current.type === "Entrada" ? (
          <Card
            description={current.description}
            type={current.type}
            value={current.value}
            key={index}
            ButtonTrash={ButtonTrash}
            removeItems={removeItems}
            current={current}
          />
        ) : (
          <Card2
            description={current.description}
            type={current.type}
            value={current.value}
            key={index}
            ButtonTrash={ButtonTrash}
            removeItems={removeItems}
            current={current}
          />
        )
      )}
    </ul>
  );
};

export default List;
