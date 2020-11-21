import './App.css';
import Header from './components/Header/Header.js';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
