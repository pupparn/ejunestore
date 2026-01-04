import './App.css'
import Navbar from './components/navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import GameStore from './components/game_list.jsx';
function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <GameStore />
    </>
  )
}

export default App
