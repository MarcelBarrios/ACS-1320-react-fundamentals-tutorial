import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt='logo' /> */}
      <Title />
      <POPOSList />
    </div>
  );
}

export default App;