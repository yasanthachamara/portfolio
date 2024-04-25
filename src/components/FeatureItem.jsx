function FeatureItem(props) {
  const colored = props.colored ? "colored" : "";
  return (
    <div className="feature-item col d-flex align-items-start">
      {props.img ? (
        <img
          src={`src/public/${props.img}`}
          alt=""
          className="bi flex-shrink-0 me-3"
        />
      ) : (
        <i className={`bi flex-shrink-0 me-3 ${colored} ${props.icon}`}></i>
      )}
      <div>
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{props.title}</h3>
      </div>
    </div>
  );
}

export default FeatureItem;
