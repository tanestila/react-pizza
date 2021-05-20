import { Route, Switch } from "react-router";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
