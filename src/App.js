import { Route, Switch } from "react-router";
import Header from "./Components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/db.json").then(({ data }) => {
      setItems(data.pizzas);
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
            <Home items={items} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
