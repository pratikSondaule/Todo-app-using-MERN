import './App.css'
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <Header />
      <AddTodo />
      <Todos />
      <Footer />
    </>
  )
}

export default App
