import { Container } from "react-bootstrap";

function Jumbotron(props) {
  return (
    <div className="p-5 bg-body-tertiary text-center rounded-3">
      <Container className="container py-5">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{props.title}</h1>
          <p className="col-lg-8 mx-auto lead">{props.description}</p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Jumbotron;
