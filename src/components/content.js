import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Search from "../views/search";
import Topbar from "./topbar";
import List from "../views/list";

const Content = () => {
  return(
    <main className="flex flex-col w-full bg-white bg-opacity-5 rounded-lg">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<List />} />
      </Routes>
    </main>
  )
}

export default Content;