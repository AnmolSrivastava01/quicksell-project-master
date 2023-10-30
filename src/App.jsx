
import { useState } from "react";
import { fetchData, getGroup, getOrder} from "./Action";
import "./App.css";
import Nav from "./Component/Navbar/Nav";
import DashNav from "./Component/DashNav/DashNav";


function App() {
  fetchData();
  const [group, setGroup] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());
  return <div className="">
    <Nav group={group} setGroup={setGroup} order={order} setOrder={setOrder}/>
    <DashNav group={group} order={order}/>
  </div>;
}

export default App;
