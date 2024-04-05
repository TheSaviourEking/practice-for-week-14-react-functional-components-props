import Showcase from './Showcase';
import BaseStats from './BaseStats'
import './App.css';

function App() {
  const basestats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45
  }

  function handleClick() {
    alert(`Special Stats\n\t
    Special Attack: ${basestats.spAttack}\n\t
    Special Defense: ${basestats.spDef}`
    );
  }

  return (
    <div className='main-wrapper background'>
      <Showcase />
      <BaseStats clicker={handleClick} stats={basestats} />
    </div>
  );
}

export default App;
