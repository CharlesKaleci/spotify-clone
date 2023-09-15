import { NavLink } from "react-router-dom";
import Icons from "../../icons";

const cardData = {
  "Made For Kaan": [
    {
      id: 0,
      type: 'list',
      name: 'Discover Weekly',
      image: 'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/UGr6ZOIoC0WwoNqAC3TeU9ZEPY88tV2KWRbZDzyaXMkLm1psfJHTeOOPbeLij4G_eOcDX7XVzm5UC7l8ZIIDN7pRSpTwNYReIF-yctlJ7hM=/NDQ6ODU6MTFUMjItOTAtMw==',
      description: 'Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.',
      creator: 'spotify'
    },
    {
      id: 1,
      type: 'list',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebad85a585103dfc2f3439119a/1/en/default',
      description: 'Hozier, The Last Shadow Puppets, Imagine Dragons and more',
      creator: 'spotify'
    },
    {
      id: 2,
      type: 'list',
      name: 'Daily Mix 2',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba03696716c9ee605006047fd/2/en/default',
      description: 'Radiohead, Coldplay, Pixies and more',
      creator: 'spotify'
    },
    {
      id: 3,
      type: 'list',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2afa26d3b0777e636458aaa8/3/en/default',
      description: 'PVRIS, Paramore, Hands Like Houses and more',
      creator: 'spotify'
    },
    {
      id: 4,
      type: 'list',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba0f16c3763233f2353693803/4/en/default',
      description: 'Kasabian, The Last Shadow Puppets, The White Stripes and more',
      creator: 'spotify'
    },
    {
      id: 5,
      type: 'list',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb867008a971fae0f4d913f63a/5/en/default',
      description: 'Kanye West, NF, Travis Scott and more',
      creator: 'spotify'
    },
    {
      id: 6,
      type: 'list',
      name: 'Daily Mix 6',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebed30111b433e140bfdd0a038/6/en/default',
      description: 'Duman, Yüzyüzeyken Konuşuruz, Büyük Ev Ablukada and more',
      creator: 'spotify'
    }
  ],
  "Episodes for you": [
    {
      id: 0,
      type: 'episode',
      name: 'years from now',
      image: 'https://i.scdn.co/image/ab67656300005f1fda64beb7f3ebbf21ee797dfe',
      description: 'büyümek çok korkutucu',
      creator: 'Tanya'
    },
    {
      id: 0,
      type: 'episode',
      name: 'Kıskançlık Hepimizde Var',
      image: 'https://i.scdn.co/image/ab67656300005f1fd094ac85c59c49f98b5fd3cb',
      description: 'Mar 13 · 19 min',
      creator: 'Portal Podcast'
    }
  ],
  "Your favorite artists": [
    {
      id: 0,
      type: 'artist',
      name: 'PVRIS',
      image: 'https://i.scdn.co/image/ab6761610000f1782afa26d3b0777e636458aaa8',
      description: 'Artist',
      creator: 'spotify'
    }
  ],
  "Recent searches": [
    {
      id: 0,
      type: 'list',
      name: 'My Matchday Songs: Rolfö',
      image: 'https://i.scdn.co/image/ab67706f00000002e564b5fb3b1204f6421010ee',
      description: 'By Spotify',
      creator: 'spotify'
    },
    {
      id: 2,
      type: 'list',
      name: 'Daily Mix 2',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba03696716c9ee605006047fd/2/en/default',
      description: 'Radiohead, Coldplay, Pixies and more',
      creator: 'spotify'
    },
  ],
};

const Card = ({ name, type, image, description }) => {
  return (
    <NavLink to={"/"}>
      <div className="p-4 bg-white bg-opacity-5 rounded-md hover:bg-opacity-10 group">
        <div className="flex flex-col">
          <div className="relative mb-4">
            <div className="w-full h-full pt-[100%] relative">
              <img className={`w-full h-full absolute inset-0 object-cover rounded ${type === 'artist' && 'rounded-full' }`} src={image} alt={name} />
            </div>
            <div className={`w-10 h-10 pt-[100%] absolute bottom-8 -left-2 ${type !== 'episode' && 'hidden'}`}>
              <img className="w-10 h-10 absolute object-cover rounded" src={image} alt={name} />
            </div>
            <div className="absolute right-1 bottom-1">
              <div className="flex h-12 w-12">
              <button className="flex items-center justify-center w-full h-full opacity-0 pointer-events-none bg-primary rounded-full group-hover:opacity-100 group-hover:pointer-events-auto transition duration-500">
                <span>
                  <Icons name="play" size={24}/>
                </span>
              </button>
            </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <NavLink className={"pb-1 text-white font-bold line-clamp-1"} to={"/"}>{name}</NavLink>
              <div className={`h-12 text-sm font-normal leading-6 line-clamp-2 ${type === 'episode' && 'text-xs h-9'}`}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
)
}

const SectionContent = ({ title }) => {

  const cards = cardData[title] || [];

  return (
    <section className={`w-full mb-4 ${title === 'Episodes for you' && 'h-[18.75rem]'}`}>
      <div className="flex justify-between w-full mb-4">
        <div>
          <h2 className="text-2xl text-white font-bold hover:underline">
            <NavLink to={"/"} >{title}</NavLink>
          </h2>
        </div>
        <div className={`flex justify-center items-center ${cardData[title] && cardData[title].length < 7 ? 'hidden' : ''}`}>
          <NavLink className={"m-2 text-sm font-semibold hover:underline"} to={"/"}>Show all</NavLink>
        </div>
      </div>
      <div className="grid gap-x-6 grid-rows-1 grid-cols-7">  
        {cards.map((item) => (
          <Card key={item.id} name={item.name} type={item.type} image={item.image} description={item.description} />
        ))}
      </div>
    </section>
  )
}

export default SectionContent;