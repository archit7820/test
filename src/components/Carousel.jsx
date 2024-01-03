import React from 'react'
import './carousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export const Teacher = () => {


  return (
    <div className='teacher'>
        <div className='teachermeet text-left'>
            Meet Our Teachers
        </div>
        <div className='teacherphoto'>

            <div className='teacher_1'>
                <div className="teacherimg">
                <img   src="https://images.pexels.com/photos/17340547/pexels-photo-17340547/free-photo-of-black-and-white-photo-of-a-footbridge.jpeg" alt="" />
                </div>
                <div className="teachertext">Kavita</div>
                <div className="teachertype">Kavita, a passionate Chakra Instructor, holds a certification in Chakra Healing and Mindfulness, guiding individuals towards holistic well-being. With expertise in balancing energy centers, she empowers her clients on their journey to inner harmony and self-discovery. [Certification Link]</div>
            </div>

            <div className='teacher_2'><img src="https://images.pexels.com/photos/17340547/pexels-photo-17340547/free-photo-of-black-and-white-photo-of-a-footbridge.jpeg" alt=""  />
            <div className="teachertext">Kesar</div>
                <div className="teachertype">Prajapati Kesar Gopalbhai – Online yoga instructor from YTT 200 hours based in Gandhinagar, Gujarat. Kesar is a young and dynamic individual globally certified by the Indian Yoga Association. She has strong communication skills and helps yogis attain their fitness goals, being mindful and making them a calmer and happier person overall.[Certification Link]</div></div>

            <div className='teacher_3'>
          <img src="https://images.pexels.com/photos/17340547/pexels-photo-17340547/free-photo-of-black-and-white-photo-of-a-footbridge.jpeg alt="" />
          <div className="teachertext">Dhanashree</div>
                <div className="teachertype">
                Dhanshri Salunkhe – Online yoga instructor from YTT 200 hours based in Aurangabad Maharashtra. Dhanshri is a Athletic Coach.Individual globally certified by the Indian Yoga Association. She has strong yoga skills and can help yogis with building their yoga skills.[Certification Link]</div></div>
        </div>
       
   </div>
    
  )
}

{/* 
const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `./kavita.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `./kesar.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `./dhanshree1_img.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
]; */}

export default Teacher
