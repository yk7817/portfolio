import Header from './components/Header';
import TopPage from './pages/TopPage';
import About from './pages/About';
import Work from './pages/Work';
import ParticlesContainer from './components/ParticlesContainer';
// css
import './App.css';
// router-dom
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ParticlesContainer />
        <div className="container">
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route exact path="/About">
              <About />
          </Route>
          <Route exact path="/Work">
            <Work />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
