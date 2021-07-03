import Header from './Components/Navbar/Header';
import '@fontsource/roboto';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>



    </>
  );
}

export default App;
