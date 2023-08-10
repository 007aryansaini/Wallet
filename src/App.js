import './App.css';
import { Router } from 'react-chrome-extension-router';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/Landingpage/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Toaster position="bottom-center" />
        <Router>
          <LandingPage />
          {/* <Dashboard /> */}
          {/* <SelectChainPageComponent /> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
