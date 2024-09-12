"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { title } from "process";

const musicSchoolContent =[
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  },
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  },
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  }, 
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  },
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  },
  {
    title:'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:'Embark on a musical journey thats uniquely yours .our personalized instruction adapts to your individual needs,setting the stage for unparalleled growth and creativity.At our music school,your aspirations meet our dedicated support,creating a harmonius path to mastery'
  }
]
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs;