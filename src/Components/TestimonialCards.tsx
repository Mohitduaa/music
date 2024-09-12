'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials =[
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    },
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    },
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    },
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    },
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    },
    {
        quote:'Joining the music school transformed my understanding of music and helped me to truly discover my own sound.The instructor are world-class!',
        name:'Alex Johnson',
        title:'Guitar Student'
    }
]
const TestimonialCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
        <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of success</h2> 
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
        </div>
    </div>
  )
}

export default TestimonialCards