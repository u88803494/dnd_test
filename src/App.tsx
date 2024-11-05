import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <DndProvider backend={HTML5Backend} >
      <div className="h-screen w-screen flex overflow-auto">
        <Sidebar />
        <Main />
      </div>
    </DndProvider>
  )
}

export default App
