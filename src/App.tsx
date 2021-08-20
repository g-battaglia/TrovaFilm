import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./MoviesContext";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
