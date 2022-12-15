import Header from './components/Header';
import TaskList from './pages/TaskList';
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
