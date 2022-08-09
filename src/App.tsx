import styled from "styled-components";
import { Goals } from "./components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <h2>Have you reached your goals today?</h2>
      <Goals />
    </Container>
  );
};

export default App;
