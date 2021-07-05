import Header from './Components/Navbar/Header';
import '@fontsource/roboto';
import Home from './Components/Pages/Home';
import Category from './Components/Pages/Category';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <Header />

      <Router>
        <Switch>

        <Route path="/category">
          <Category />
        </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>



    </>
  );
}

export default App;
