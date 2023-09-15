import { NavLink } from "react-router-dom";
import SectionContent from "./components/sectionContent";
import Footer from "./footer";

const PlaylistData = [
  {
    id: 0,
    name: 'Podcasts',
    image: 'https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554'
  }
]

const PlaylistSection = ({name, image}) => {
  return (
    <div className="flex w-44 h-44 bg-orange-700 rounded-lg overflow-hidden">
      <NavLink className={"flex relative"} to={"/"}>
        <div className="flex flex-col">
          <div className="flex">
            <span className="p-4 text-white text-2xl font-semibold">{name}</span>
          </div>
          <div className="">
            <div className="h-24 w-24 pt-[100%] relative rotate-25">
              <img className="absolute h-24 w-24 -inset-y-5 inset-x-24 object-cover" src={image} alt={name} />
            </div>
          </div>
        </div>
      </NavLink>  
    </div>
  )
}

const Search = () => {
  return (
    <div className="flex flex-col w-full px-6 overflow-auto" style={{ maxHeight: 'calc(100vh - 9rem)' }}>
      <div className="flex flex-col mt-4 w-full">
        <SectionContent title={"Recent searches"} />
        <section className="flex flex-col w-full gap-y-6 mb-4">
          <div>
            <div className="mb-4">
              <h2 className="text-2xl text-white font-bold ">Browse All</h2>
            </div>
            <div className="grid grid-cols-7 grid-row-7 gap-6">
              {new Array(49).fill().map(() => (
                <PlaylistSection name={PlaylistData[0].name} image={PlaylistData[0].image} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Search;