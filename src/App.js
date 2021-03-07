import './App.scss';
import RightPanel from "./components/right-panel"
import LeftPanel from "./components/left-panel"
import AppProvider from "./redux/store"
function App() {
  return (
    <AppProvider>
    <div className="App">
      <LeftPanel />
      <RightPanel />
    </div>
    </AppProvider>
  );
}

export default App;
