import "./index.css";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acc, current) => acc + current.value,
    0
  );

  return (
    <div className="total-div">
      <span className="total-span-total">Valor total</span>
      <span className="total-span-price">R$ {total}</span>
    </div>
  );
};

export default TotalMoney;
