import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import User from './Components/User';
import AddNewTodo from './Components/AddNewTodo.jsx';
import Calendar from './Components/Calendar.jsx';
import Projects from './Components/Projects.jsx';
import Todos from './Components/Todos.jsx';
import EditTodo from './Components/EditTodo.jsx';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>

      <Main>
       <Todos />
       <EditTodo />
      </Main>
      
    </div>
  );
}

export default App;
