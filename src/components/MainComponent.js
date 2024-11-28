import { useState } from "react";
import Header from "./Header";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <Header />
    </div>
  );
}

export default MainComponent;