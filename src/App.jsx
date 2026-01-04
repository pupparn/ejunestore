import './App.css'
import Navbar from './components/navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import GameStore from './components/game_list.jsx';
import SuggestionBanner from './components/feedback.jsx';
import Features from './components/feature.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <GameStore />
      <SuggestionBanner />
      <Features />
      <Footer />
    </>
  )
}

export default App
