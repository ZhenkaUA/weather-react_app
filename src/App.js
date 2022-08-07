import "./App.css";
import Header from "./Header";
import MainBlock from "./MainBlock";
import Footer from "./Footer";
import background from "./images/weather.jpg";

export default function App() {
  return (
    <div className="App">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="container"
      >
        <Header />
        <br />
        <MainBlock />
        <Footer />
      </div>
    </div>
  );
}