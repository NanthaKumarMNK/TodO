import { useEffect } from "react";
import AppLayout from "./Layout/AppLayout";
import { Provider } from "./context/PocketContext";
import usePocketContext from "./hooks/usePocketContext";
import "./App.css";

function App() {
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);


  return (
    <Provider>
      <div className="App">
        <AppLayout />
      </div>
    </Provider>
  );
}

export default App;
