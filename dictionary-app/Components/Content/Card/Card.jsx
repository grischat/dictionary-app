import "../Card/Card.scss";

const Card = ({ children, name }) => {
  return (
    <div className="card__container">
      {children}
      <div className="card__content">
        <h4 className="card__name">{name}</h4>
        <div className="card__divider-horizontal"></div>
      </div>
    </div>
  );
};

export default Card;
