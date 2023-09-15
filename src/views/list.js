import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <div className="flex flex-col px-6 pt-5 pb-6">
      <div className="flex flex-row text-white">
        <div className="w-58 h-58 mr-6">
          <div className="w-full h-full pt-[100%] relative">
            <img className="w-full h-full absolute inset-0 object-cover" src={"https://mosaic.scdn.co/640/ab67616d00001e0261cf6fe1ad67368a4eb8037eab67616d00001e02a8092710bb3ac7af94d80bdbab67616d00001e02b34ea15b632e74398f1cca28ab67616d00001e02cbe4c9e2f92aa32844b78acd"} alt="deneme"/> 
          </div>
        </div>
        <div className="flex flex-col flex-auto pt-14 text-sm font-semibold">
          <span>Playlist</span>
          <div className="flex flex-row w-full">
            <button className="flex justify-start w-full text-8xl font-bold">
              <span>
                <h1 className="mt-2 mb-3">kodumun mühendisi</h1>
              </span>
            </button>
          </div>
          <div className="flex justify-start mt-2">
            <div className="flex flex-row gap-x-1">
              <div className="flex w-6 h-6">
                <div className="w-full h-full pt-[100%] relative">
                  <img className="absolute w-6 h-6 inset-0 rounded-full" src="https://i.scdn.co/image/ab67757000003b828e609e8391ec85e938387631" alt=""/>
                </div>
              </div>
              <div className="flex text-sm hover:underline">
                <NavLink>Kaan</NavLink>
              </div>
            </div>
            <div className="flex flex-row items-center">
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;