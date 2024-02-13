import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;

// api key
// 887ed62fd2cf41a090689225477a9074
