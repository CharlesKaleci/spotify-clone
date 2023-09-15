import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import "./index.css"


function App() {
  return (
    <Router>
      <div className="flex flex-col h-full w-full">
        <div className="wrapper flex flex-row px-2 pt-2 space-x-2">
          <Sidebar />
          <Content />
        </div>
        <div className="h-24 w-full z-50 bg-black">
          <Player />
        </div>
      </div>
    </Router>
  );
}

export default App;
