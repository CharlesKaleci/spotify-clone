import { NavLink } from "react-router-dom";
import Icons from "../icons";
import SectionContent from "./components/sectionContent";
import Footer from "./footer";

const sectionTitle = [
  {
    id:0,
    title: 'Made For Kaan'
  },
  {
    id:1,
    title: 'Episodes for you'
  },
  {
    id:2,
    title: 'Your favorite artists'
  }
]

const cardLists = [
  {
    id: 0,
    name: "Gece kodlaması",
    image: "https://mosaic.scdn.co/640/ab67616d00001e0261cf6fe1ad67368a4eb8037eab67616d00001e02a8092710bb3ac7af94d80bdbab67616d00001e02b34ea15b632e74398f1cca28ab67616d00001e02cbe4c9e2f92aa32844b78acd"
  },
  {
    id: 1,
    name: "Not: 3 Eylül",
    image: "https://mosaic.scdn.co/640/ab67616d00001e029b7b7dacc44acdcafb69a1a2ab67616d00001e02b2ced5543cce685a495d5d74ab67616d00001e02f0ec23f47b77b05fcd2c82bbab67616d00001e02fe1ca04a42d2bb8410387812"
  },
  {
    id: 2,
    name: "Rock makes me confused",
    image: "https://i.scdn.co/image/ab67706c0000da84f5e173998426211392689e69"
  },
  {
    id: 3,
    name: "liste 4",
    image: "https://mosaic.scdn.co/640/ab67616d00001e02402ea363d05cf3af7db2ef45ab67616d00001e0249af7d5bfd29ae589a99e1cdab67616d00001e02be82673b5f79d9658ec0a9fdab67616d00001e02fc915b69600dce2991a61f13"
  },
  {
    id: 4,
    name: "Liste 5",
    image: "https://mosaic.scdn.co/640/ab67616d00001e021c08bca073e89ae32c68ffaaab67616d00001e026603ea5659292d4e7362f890ab67616d00001e0295ca6a9b4083a86c149934aeab67616d00001e02e2e352d89826aef6dbd5ff8f"
  },
  {
    id: 5,
    name: "liste 6",
    image: "https://mosaic.scdn.co/640/ab67616d00001e028cb857c1e0f9c757cd5744deab67616d00001e029ad322ea6e0e46550773e628ab67616d00001e02cc761ba55b0e7abad4539abeab67616d00001e02cf06b7a58c6bf3e90102bf05"
  }
]

const Card = ({ name, image}) => {
  return (
    <div className="flex h-20 bg-white bg-opacity-10 rounded hover:cursor-pointer hover:bg-opacity-20 transition duration-200 group">
      <div className="w-20 h-20 relative">
        <img className="w-20 h-20 absolute object-cover rounded-l" src={image} alt={name} />
      </div>
      <div className="flex flex-auto items-center justify-between px-4">
        <div className="flex font-semibold">
          <NavLink to={"/"}>{name}</NavLink>
        </div>
        <div className="ml-2">
          <div className="flex h-12 w-12">
            <button className="flex items-center justify-center w-full h-full opacity-0 pointer-events-none bg-primary rounded-full group-hover:opacity-100 group-hover:pointer-events-auto transition duration-500">
              <span>
                <Icons name="play" size={24}/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col gap-y-6 w-full pb-8 overflow-auto" style={{ maxHeight: 'calc(100vh - 9rem)' }}>
      <section>
        <div> 
          <div className="flex w-full pt-2 px-6 bg-gradient-to-b from-green-900">
            <section className="flex flex-col w-full mb-4 text-white">
              <div className="flex w-full mb-5">
                <div className="w-full">
                <h2 className="text-3xl font-bold">Good evening</h2>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-6 mb-4">
                {cardLists.map((item) => (<Card key={item.id} image={item.image} name={item.name} />))}
              </div>
            </section>
          </div>
          <div className="flex flex-col gap-y-6 px-6">
            {sectionTitle.map((item) => (
              <SectionContent id={item.id} title = {item.title} />
            ))}        
          </div>
        </div>  
      </section>
      <div className="w-full px-6">
        <Footer />
      </div>
    </div>
  )
}

export default Home;