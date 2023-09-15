import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Icons from "../icons";
import Library from "./sidebar/library";

const Sidebar = () => {

  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname)

  return (
    <div className="flex flex-col w-[4.5rem] h-full space-y-2">
      <nav className="flex w-full h-28 bg-white bg-opacity-5 rounded-lg">
        <div className="flex w-full">
          <ul className="flex flex-col justify-center w-full py-2 px-3">
            <li className="flex justify-center items-center relative h-12 w-12 py-1 px-3">
              <NavLink to={"/"} onClick={() => setIsActive("/")} exact className={`hover:text-white transition duration-200 group ${isActive === "/" && 'text-white'}`}>
                {isActive === "/" ? <Icons name={"activeHome"} size={24}/> : <Icons name={"home"} size={24}/>}
                <div className="absolute inset-y-3 left-full bg-black rounded hidden group-hover:block">
                  <div className="flex items-center justify-center z-50 w-full h-full px-2 py-1 text-sm bg-white bg-opacity-20 rounded">
                    <span>Home</span>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="flex justify-center items-center relative h-12 w-12 py-1 px-3">
              <NavLink to={"/search"} onClick={() => setIsActive("/search")} className={`hover:text-white transition duration-200 group ${isActive === "/search" && 'text-white'}`}>
                {isActive === "/search" ? <Icons name={"activeSearch"} size={24}/> : <Icons name={"search"} size={24}/>}
                <div className="absolute inset-y-3 left-full bg-black rounded hidden group-hover:block">
                  <div className="flex items-center justify-center z-50 w-full h-full px-2 py-1 text-sm bg-white bg-opacity-20 rounded">
                    <span>Search</span>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Library />
    </div>
  )
}

export default  Sidebar;

