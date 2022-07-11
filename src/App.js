import Sidebar from './components/Sidebar/Sidebar'
import Overview from './pages/Overview/Overview'
import './styles/index.scss'
// import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Overview />
      {/* <Login /> */}
    </div>
  )
}

export default App
