import MainComponent from "./components/MainComponent";

export const config = {
  endpoint: `https://qtify-backend-labs.crio.do`,
};

function App() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
