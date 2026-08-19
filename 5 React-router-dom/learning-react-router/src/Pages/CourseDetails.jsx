import React from "react";
import { useParams, Link } from "react-router-dom";

const CourseDetails = () => {
  // console.log(useParams())

  const courses = [
    {
      id: "JAVA01",
      courseName: "Java",
      price: 5000,
      duration: "5 Months",
    },
    {
      id: "PYTHON02",
      courseName: "Python",
      price: 4500,
      duration: "4 Months",
    },
    {
      id: "JAVASCRIPT03",
      courseName: "JavaScript",
      price: 4000,
      duration: "3 Months",
    },
    {
      id: "RUBY04",
      courseName: "Ruby",
      price: 3500,
      duration: "3 Months",
    },
    {
      id: "REACTJS05",
      courseName: "React JS",
      price: 5500,
      duration: "4 Months",
    },
  ];

  const { id } = useParams();

  const course_details = courses.find((data) => data.id === id);
  console.log(course_details);

  return <>
    <div>
      <h1>{course_details.courseName}</h1>

      <p>Course ID: {course_details.id}</p>
      <p>Price: ₹{course_details.price}</p>
      <p>Duration: {course_details.duration}</p>
    </div>
    <button>
      <Link
        to="/courses"
        style={{ textDecoration: "none", color: "blue" }}
      >
        All Courses
      </Link>
    </button>
  </>
};

export default CourseDetails;