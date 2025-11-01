import './App.css'
import Header from './components/Header'
import UserCard from './components/UserCard'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import "./css/style.css"
import LogoReact from './components/LogoReact';

function App() {

  return(
    <div className="contenedor">
      <Header />
      <main className="content">
        <UserCard />
        <TaskList />
        <LogoReact />
      </main>
      <Footer />
      

    </div>
  )
}

export default App
