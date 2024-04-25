function Header(props) {
  return (
    <div>
      <header className="p-3 border-bottom d-flex justify-content-center">
        <a
          href="/"
          className="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <span className="fs-4 fw-medium">{props.title}</span>
        </a>
      </header>
    </div>
  );
}

export default Header;
