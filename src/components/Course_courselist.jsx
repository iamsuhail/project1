import React from 'react'
import js from "../assets/images/js.png";
import"../styles/Course_courselist.scss";
const Course_courselist = () => {
    const courses = [
        {
          id: 1,
          title: 'Become a Certified Web Developer',
          description: ' Learn: HTML | CSS | JavaScript | Web programming | Web development | Front-end | Responsive | JQuery',
          rating: 4.5,
          hours: 10
        //   imageUrl: {js},
        },
        {
          id: 2,
          title: 'AJAX Development',
          description: 'ACreate Elegant, Powerful Web and Mobile Applications Using AJAX.',
          rating: 4.0 ,
          hours: 12
        //   imageUrl: 'course2.jpg',
        },
        {
            id: 3,
            title: 'Introduction to Programming',
            description: 'Professional Coding Skills for Beginners',
            rating: 4.5,
            hours: 10
            // imageUrl: 'course1.jpg',
          },
          {
            id: 4,
            title: 'The Complete MySQL Developer Course',
            description: 'MySQL: Learn how to use MySQL and PHP to build Reports and work with Databases for Web Applications',
            rating: 4.0,
            hours: 12
            // imageUrl: 'course2.jpg',
          }
        // Add more courses as needed
      ];
  return (
    <div>
    <div className="head"> More Courses by HIREXZO</div>
         <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <img src={js} alt={course.title} />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-meta">
              <div className="rating">
                Rating: {course.rating}
              </div>
              <div className="hours">
                Hours: {course.hours}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Course_courselist