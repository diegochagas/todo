import Header from './components/Header';
import TaskList from './components/TaskList';
import GlobalStyle from './styles'

function App() {
  return (
    <div className="App">
      <Header />

      <TaskList />

      <GlobalStyle />
    </div>
  );
}

export default App;
