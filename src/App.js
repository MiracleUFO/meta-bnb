import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import Places from './pages/Places';
import NotFound from './pages/404';
import './styles/App.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/places" element={<Places />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
