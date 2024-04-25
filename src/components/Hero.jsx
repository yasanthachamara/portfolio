import design from "../public/At the office-amico.png";

function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={design}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="400px"
            loading="lazy"
          ></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Hi, I&apos;m Yasantha. I ❤️ programming
          </h1>
          <p className="lead">
            I&apos;m a PEGA certified senior system architect with 8 years of
            industry experience in developing innovative software solutions.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
