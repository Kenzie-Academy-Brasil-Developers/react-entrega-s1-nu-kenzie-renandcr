import "./index.css";

export const Card = ({
  ButtonTrash,
  description,
  type,
  value,
  removeItems,
  current,
}) => {
  return (
    <li className="card-div">
      <div className="card-div-description">
        <h3 className="card-h3">{description}</h3>
        <span className="card-span-type">{type}</span>
      </div>
      <div className="card-div-value" onClick={() => removeItems(current)}>
        <span className="card-span-value">R$ {value}</span>
        <div className="img-div">
          <img className="card-img-value" src={ButtonTrash} alt="Lixeira" />
        </div>
      </div>
    </li>
  );
};

export const Card2 = ({
  ButtonTrash,
  description,
  type,
  value,
  removeItems,
  current,
}) => {
  return (
    <li className="card-div-2">
      <div className="card-div-description">
        <h3 className="card-h3">{description}</h3>
        <span className="card-span-type">{type}</span>
      </div>
      <div className="card-div-value" onClick={() => removeItems(current)}>
        <span className="card-span-value">R$ {value}</span>
        <div className="img-div">
          <img className="card-img-value" src={ButtonTrash} alt="Lixeira" />
        </div>
      </div>
    </li>
  );
};

export const CardEmpty = () => {
  return (
    <div>
      <li className="card-div-empty">
        <div className="empty-div-um"></div>
        <div className="empty-div-dois"></div>
      </li>
      <li className="card-div-empty">
        <div className="empty-div-um"></div>
        <div className="empty-div-dois"></div>
      </li>
      <li className="card-div-empty">
        <div className="empty-div-um"></div>
        <div className="empty-div-dois"></div>
      </li>
    </div>
  );
};
