import Container from "react-bootstrap/Container";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";

function App() {
  const title = "Hi, I'm Yasantha. I ❤️ programming";
  const description =
    "I'm a PEGA certified senior system architect with 8 years of industry experience in developing innovative software solutions.";

  return (
    <Container fluid="true" className="container py-4">
      <Header />
      <Jumbotron title={title} description={description} data-bs-theme="dark" />
    </Container>
  );
}

export default App;
