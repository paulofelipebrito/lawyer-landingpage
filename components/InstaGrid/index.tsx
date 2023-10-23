import Image from 'next/image';
import React from 'react'

type Props = {}

const mockedPosts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    caption: 'Beautiful sunset view',
    location: 'Beach',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    caption: 'Exploring the mountains',
    location: 'Mountain Range',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300',
    caption: 'Beautiful sunset view',
    location: 'Beach',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300',
    caption: 'Exploring the mountains',
    location: 'Mountain Range',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300',
    caption: 'Beautiful sunset view',
    location: 'Beach',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300',
    caption: 'Exploring the mountains',
    location: 'Mountain Range',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300',
    caption: 'Beautiful sunset view',
    location: 'Beach',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300',
    caption: 'Exploring the mountains',
    location: 'Mountain Range',
  },
];

const InstaGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[546px]">
      {mockedPosts.map(post => (
        <div key={post.id} className="relative">
          <Image src={post.image} alt={post.caption} layout="fill" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 bg-black text-white p-2 opacity-80">
            <p className="text-sm">{post.caption}</p>
            <p className="text-xs">{post.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InstaGrid