import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App;
