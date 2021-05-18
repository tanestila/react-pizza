import { Route, Switch } from "react-router";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

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
