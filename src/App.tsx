import Navbar from "./components/Navbar";
import { CardGrid } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./MoviesContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <CardGrid />
      </ThemeProvider>
    </div>
  );
}

export default App;
