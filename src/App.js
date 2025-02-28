// import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt='logo' /> */}
      <Title />
      <div className="MainContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;