import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./app.css";

function App() {
  //   const { state, dispatch } = useContext(DataContext);
  //   console.log(state);

  //   const press = () => {
  //     dispatch({ type: "add", payload: { Book: 55 } });
  //   };

  return (
    <div className="container">
      <Navigation />
      <div className="banner-image-div"></div>
      <div className="app-container">
        <Header />
        <Menu />
      </div>
    </div>
  );
}

export default App;
