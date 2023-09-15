import React from 'react';
import Icons from '../../icons';
import { NavLink } from 'react-router-dom';

const playlists = [
  {
    id: 0,
    name: 'PVRIS',
    type: 'playlist',
    image: 'https://mosaic.scdn.co/640/ab67616d00001e02124881f82acfdf356f7d24aeab67616d00001e0259aca3c902712bf5ba4ac523ab67616d00001e026d81fe74bb715685e4219113ab67616d00001e02e6d5b2858f43f4b51d948de9',
    creator: 'Kaan',
    pinned: true,
  },
  {
    id: 1,
    name: 'Artiic Monkeys',
    type: 'artist',
    image: 'https://i.scdn.co/image/ab6761610000101f7da39dea0a72f581535fb11f',
    creator: 'artist',
    pinned: true,
  },
  {
    id: 2,
    name: 'Liked Songs',
    type: 'playlist',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    creator: 'spotify',
    pinned: true,
  },
  {
    id: 3,
    name: 'Evergreen',
    type: 'album',
    image: 'https://i.scdn.co/image/ab67616d000011eb9a1c4205d54cccf0458e20f0',
    creator: 'PVRIS',
    pinned: true,
  },
  {
    id: 4,
    name: 'Gece Kodlaması',
    type: 'list',
    image: 'https://mosaic.scdn.co/640/ab67616d00001e0261cf6fe1ad67368a4eb8037eab67616d00001e02a8092710bb3ac7af94d80bdbab67616d00001e02b34ea15b632e74398f1cca28ab67616d00001e02cbe4c9e2f92aa32844b78acd',
    creator: 'Kaan',
    pinned: false,
  },
  {
    id: 5,
    name: 'Liked Songs',
    type: 'playlist',
    image: 'https://i.scdn.co/image/ab67706c0000dec5bda3e92679dd5b54792b685a',
    creator: 'spotify',
    pinned: false,
  },
  {
    id: 6,
    name: 'Evergreen',
    type: 'album',
    image: 'https://i.scdn.co/image/ab67706c0000dec5bda3e92679dd5b54792b685a',
    creator: 'PVRIS',
    pinned: false,
  },
  {
    id: 1,
    name: 'Artiic Monkeys',
    type: 'artist',
    image: 'https://i.scdn.co/image/ab6761610000101f7da39dea0a72f581535fb11f',
    creator: 'artist',
    pinned: true,
  },
  {
    id: 2,
    name: 'Liked Songs',
    type: 'playlist',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    creator: 'spotify',
    pinned: true,
  },
  {
    id: 3,
    name: 'Evergreen',
    type: 'album',
    image: 'https://i.scdn.co/image/ab67616d000011eb9a1c4205d54cccf0458e20f0',
    creator: 'PVRIS',
    pinned: true,
  },
];

const PlaylistItem = ({ image, name, type }) => (
  <li className="flex w-full h-16">
    <NavLink className={"flex w-full h-full p-2 hover:bg-opacity-5 hover:bg-white hover:cursor-pointer rounded transition duration-200"} to={"/playlist"}>
      <div className="flex w-full h-full">
        <div className="w-full h-full pt-[100%] relative">
          <img className={`w-full h-full absolute inset-0 object-cover rounded ${type === "artist" && 'rounded-full'}`} src={image} alt={name} />
        </div>
      </div>
    </NavLink>
  </li>
);

const Library = () => {
  return (
    <div className="flex-col w-full bg-white bg-opacity-5 rounded-lg">
      <div className="flex w-full h-14">
        <header className="w-full h-full py-2 px-4">
          <button className="flex justify-center items-center relative h-full py-1 px-2 hover:text-white transition duration-200 group">
            <Icons name="library" size={24} />
            <div className="absolute inset-y-2 left-full bg-black rounded hidden group-hover:block">
              <div className="items-center justify-center w-full h-full px-2 py-1 text-sm whitespace-nowrap bg-white group-hover:bg-opacity-20 rounded">
                <span>Expand Your Library</span>
              </div>
            </div>
          </button>
        </header>
      </div>
      <div className="library px-1 pb-1 overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 17rem)' }}>
        <ul>
          {playlists.map((playlist) => (
            <PlaylistItem key={playlist.id} image={playlist.image} name={playlist.name} type={playlist.type} />
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Library;