import { Menu } from "@headlessui/react";
import Icons from "../../icons";

const Auth = () => {

  const user = {
    name: 'Kaan',
    avatar: 'https://i.scdn.co/image/ab67757000003b828e609e8391ec85e938387631'
  }

  return(
    <Menu as={"nav"} className={"relative"}>
      <Menu.Button className="flex w-8 h-8 justify-center items-center rounded-full bg-black bg-opacity-70">
        <img className="rounded-full h-6 w-6" src={user.avatar} alt=""/>
      </Menu.Button>
      <Menu.Items className={"absolute w-48 translate-y-2 top-full right-0 bg-backdrop-200 rounded text-white bg-black"}>
        <div className="p-1 bg-white bg-opacity-10 rounded">
        <Menu.Item className="flex flex-row justify-between p-3 pr-2 text-sm font-semibold rounded hover:bg-white hover:bg-opacity-10">
            {
                <a href="/account-settings">Account <Icons size={16} name={"external"} /></a>   
            }
        </Menu.Item>
        <Menu.Item className="flex flex-row justify-between p-3 pr-2 text-sm font-semibold rounded hover:bg-white hover:bg-opacity-10">
          {
              <a href="/account-settings">Set up your Duo plan <Icons size={16} name={"external"} /></a>
          }
        </Menu.Item>
        <Menu.Item className="flex p-3 pr-2 text-sm font-semibold rounded hover:bg-white hover:bg-opacity-10">
          {
            <a href="/account-settings">Profile</a>
          }
        </Menu.Item>
        <Menu.Item className="flex p-3 pr-2 text-sm font-semibold rounded rounded-b-none hover:bg-white hover:bg-opacity-10 border-b-2 border-b-white border-opacity-20">
          {
            <a href="/account-settings">Settings</a>
          }
        </Menu.Item>
        <Menu.Item className="flex p-3 pr-2 text-sm font-semibold rounded hover:bg-white hover:bg-opacity-10">
          {
            <a href="/account-settings">Log out</a>
          }
        </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default Auth;