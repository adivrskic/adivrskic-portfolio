import { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./layout/Container";
import Loading from "./components/Loading";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3500);
  }, []);

  return (
    <div className="adivrskic-app">
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Header />

          <Container>
            <Landing />
          </Container>

          <Profile />

          <Container>
            <Work />
          </Container>

          <Skills />

          <Contact />

          <Menu />
        </>
      )}
    </div>
  );
}

export default App;
