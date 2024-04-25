import Container from "react-bootstrap/Container";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Divider from "./components/Divider";
import skills from "./public/skills";

function App() {
  const person = {
    fName: "Yasantha",
    lName: "Paranamanna",
    fullName: "Yasantha Paranamanna",
    summary: "Hi, I'm Yasantha. I ❤️ programming!",
    about:
      "I'm a PEGA certified senior system architect with 8 years of industry experience in developing innovative software solutions.",
  };

  return (
    <Container fluid="true">
      <Header title={person.fullName} />
      <Divider />
      <Jumbotron
        title={person.summary}
        description={person.about}
        data-bs-theme="dark"
      />
      <Divider />
      <Feature title="Tools & Technologies" skills={skills} />
    </Container>
  );
}

export default App;
