import "../Card/Card.scss";

const Card = ({ children, name }) => {
  return (
    <div className="card__container">
      <div className="card__content">
        <h4 className="card__name">{name}</h4>
        <div className="card__divider-horizontal"></div>
      </div>
      <span className="card__meaning">Meaning</span>
      {children}
    </div>
  );
};

export default Card;
