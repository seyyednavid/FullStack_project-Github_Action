import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUserName(response.data)
  };

  return (
    <div className="App">
      <h1>My website</h1>
      <h3>My name is {userName}</h3>
    </div>
  );
}

export default App;
