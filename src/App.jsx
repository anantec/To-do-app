
import './App.css'
import ToDoList from './component/ToDoList'
import {TodoProvider} from './component/to-do-context/ToDoContext'
function App() {
 

  return (
    <>
    <TodoProvider>
     <ToDoList/>
    </TodoProvider>
    </>
  )
}

export default App
