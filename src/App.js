import './App.css';
import View from './components/View';

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
