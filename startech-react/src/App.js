<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">

=======
import { Header } from './components/HeaderPanels';
import { UserPanel } from './components/UserPanel.jsx';
import { PanelLeft } from './components/Nav.jsx' 
function App() {
  return (
    <div className="App">
      {/* <Link to='#'> */}
      {/* home */}
      {/* </Link> */}
      <Header />
      <PanelLeft/>
      <UserPanel users="30"/>
>>>>>>> 4df36db4bb8df86a502b99be23a51ed2ba3170bf
    </div>
  );
}

export default App;
