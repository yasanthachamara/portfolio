import { Container } from "react-bootstrap";

function Jumbotron(props) {
  const linkedIn = "https://www.linkedin.com/in/yasanthachamara/";
  return (
    <div className="bg-dark text-secondary p-5 bg-body-tertiary text-center rounded-3">
      <Container className="container py-5">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-white">{props.title}</h1>
          <p className="col-lg-8 fs-5 mx-auto lead">{props.description}</p>
          <a href={linkedIn} target="_blank">
            <button
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              type="button"
            >
              Contact me
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Jumbotron;
