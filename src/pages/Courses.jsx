import React from 'react'
import course1 from "../assets/images/c1.jpg";
// import HeroSection from '../components/Course_herosection';
import CourseHeroSection from '../components/CourseHeroSection';
import Rating from "../components/Course_Rating";
import Coursellist from '../components/Course_courselist';
import Faq from "../components/Course_Faq";
import '../styles/Courses.scss';
const courseData = {
  title: "Javascript for Beginners",
  description: "Learn javascript online and supercharge your web design with this Javascript for beginners training course.",
  rating: "4.0",
  studentsCount: "19,640",
  language: "Hindi",
  lecturesCount: "100+",
  image: course1,
  newCost: "3600",
  oldCost: "7000",
  courseDetails: [
    "No Pre-requisite Required",
    "170+ hours On-Demand Video",
    "400+ Coding Questions (asked by Top Companies)",
    "Expert Sessions by Sr .SDE, StartUp Devs, VPs, Recruiters etc.",
    "Live Resume & Interview Preparation",
    "DSA - Extreme Beginner to Advanced with Doubt Assistance",
  ],
  whatYouWillLearn: [
    "Extensive, informative and interesting video lecture",
    "Complete Code demonstrated in lecture",
    "Lab Exercises",
    "Lab Solution Sets",
    "All Powerpoint Demonstrations Used in Course",
    "Instructor contact Email for questions and clarifications",
    "Coverage of all important primary Javascript concepts",
  ],
};
const Courses = () => {
  return (
    <div className='courses-home'>
     <CourseHeroSection course={courseData} />
     <Rating/>
     <Coursellist/>
     <Faq/>
    </div>
  )
}

export default Courses