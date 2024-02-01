import Sidebar from "../components/notes/Sidebar";
import Home from "../components/Home";
import Notes from "../components/notes/Notes";
import usePocketContext from "../hooks/usePocketContext";

function AppLayout() {
  const { selected } = usePocketContext();
  return (
    <div className="desktop">
      <Sidebar />
      {selected.length > 0 ? <Notes /> : <Home />}
    </div>
  );
}

export default AppLayout;

