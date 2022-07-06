import './App.css';
import Diagram from './component/Diagram/Diagram';
import Score from './component/Score/Score';

function App() {
  return (
    <div className="App">
      <Score totalscore='$32'/>
      <Diagram />
    </div>
  );
}

export default App;
