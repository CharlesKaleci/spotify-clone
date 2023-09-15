import Icons from "../icons"
import { useNavigate, useLocation } from "react-router-dom";
import Auth from "./topbar/auth";

const Topbar = () => {
  
  const navigate = useNavigate();

  const location = useLocation();

  const isSearchPage = location.pathname === "/search";

  return ( 
    <header className={`flex justify-between items-center h-16 px-6 py-4 rounded-t-lg ${isSearchPage ? 'bg-opacity-10' : 'bg-green-900'}`}>
      <div className="flex flex-row gap-x-2">
        <div className="flex items-center space-x-2">
          <div className="bg-black bg-opacity-70 rounded-full">
            <button onClick={() => navigate(-1)} className="flex h-8 w-8 justify-center items-center -rotate-180 bg-white bg-opacity-5 rounded-full">
              <Icons size={16} name="next" />
            </button>
          </div>
          <div className="bg-black bg-opacity-70 rounded-full">
            <button onClick={() => navigate(1)} className="flex h-8 w-8 justify-center items-center bg-white bg-opacity-5 rounded-full">
              <Icons size={16} name="next" />
            </button>
          </div>
        </div>
        <div className={`flex justify-start items-center h-12 ${isSearchPage ? "block" : "hidden"}`}>
          <div>
            <form className="relative">
              <input className="h-12 w-[23rem] py-1 px-9 text-sm font-semibold text-white bg-white bg-opacity-10 rounded-3xl outline-white placeholder:text-opacity-20" placeholder="What do you want to listen to?"/>
              <div className="absolute top-4 left-3 font-bold">
                <Icons name={"search"} size={16}/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex bg-white bg-opacity-5 rounded-2xl text-white text-sm font-medium"> 
          <a className="flex flex-row items-center space-x-1 relative pl-8 pr-4 py-1" href="/"> 
            <span className="absolute left-3 top-2">
              <Icons size={16} name="download" />
            </span>
            <span>Install App</span>
          </a>
        </div>
        <Auth />
      </div>
    </header>
  )
}

export default Topbar;