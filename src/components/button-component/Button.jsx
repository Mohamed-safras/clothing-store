import "../button-component/button.styles.scss";

const Button = ({ title, event, style_type, Icon, ...otherprops }) => {
  return (
    <button
      {...otherprops}
      onClick={event && (() => event())}
      className={`btn ${style_type === "primary" ? "primary" : "secondary"}`}
    >
      {Icon && <img className="icon" src={Icon} alt="icon" />}
      <p>{title}</p>
    </button>
  );
};

export default Button;
