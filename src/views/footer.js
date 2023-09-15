import { NavLink } from "react-router-dom";
import Icons from "../icons";

const Footer = () => {
  return (
    <div className="flex font-semibold mt-10">
      <nav className="w-full px-3 pt-2 pb-10">
        <div className="grid grid-cols-5 gap-x-6 my-8 pb-10 border-b-2 border-white border-opacity-10">
          <div className="flex">
            <ul className="text-pasive font-semibold">
              <li className={"pb-2"}>
                <p className="text-white">Company</p>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>About</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Jobs</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>For the Record</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="text-pasive font-semibold">
              <li className={"pb-2"}>
                <p className="text-white">Communities</p>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>For Artists</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Developers</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Advertising</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Investors</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Vendors</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="text-pasive font-semibold">
              <li className={"pb-2"}>
                <p className="text-white">Useful links</p>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Support</NavLink>
              </li>
              <li className={"pb-2 hover:underline"}>
                <NavLink to={"/"}>Free Mobile App</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex"></div>
          <div className="flex justify-end flex-row">
            <NavLink className={"flex justify-center items-center h-10 w-10 mr-4 rounded-full text-white bg-white bg-opacity-10 hover:bg-opacity-30"} to={""}>
              <Icons size={16} name="instagram" />
            </NavLink>
            <NavLink className={"flex justify-center items-center h-10 w-10 mr-4 rounded-full text-white bg-white bg-opacity-10 hover:bg-opacity-30"} to={""}>
              <Icons size={16} name="twitter" />
            </NavLink>
            <NavLink className={"flex justify-center items-center h-10 w-10 rounded-full text-white bg-white bg-opacity-10 hover:bg-opacity-30"} to={""}>
              <Icons size={16} name="facebook" />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex">
            <ul className="flex flex-row justify-between">
              <li className={"pb-2 hover:text-white mr-4 text-sm"}>
                <NavLink to={"/"}>Legal</NavLink>
              </li>
              <li className={"pb-2 hover:text-white mr-4 text-sm"}>
                <NavLink to={"/"}>Privacy Center</NavLink>
              </li>
              <li className={"pb-2 hover:text-white mr-4 text-sm"}>
                <NavLink to={"/"}>Privacy Policy</NavLink>
              </li>
              <li className={"pb-2 hover:text-white mr-4 text-sm"}>
                <NavLink to={"/"}>Cookies</NavLink>
              </li>
              <li className={"pb-2 hover:text-white mr-4 text-sm"}>
                <NavLink to={"/"}>About Ads</NavLink>
              </li>
              <li className={"pb-2 hover:text-white text-sm"}>
                <NavLink to={"/"}>Accessibility</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <span>© 2023 Spotify AB</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer;