import { useData } from "../hooks/use-data";
import MenuItem from "./MenuItem";
import './menu.css'

function Menu() {
  const data = useData();

  const renderedMenu = data.state.menu.map((item) => {
    return <MenuItem item={item} key={item.id} />;
  });

  return <div className="menu-container">{renderedMenu}</div>;
}

export default Menu;
