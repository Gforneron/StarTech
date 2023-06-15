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
    </div>
  );
}

export default App;
