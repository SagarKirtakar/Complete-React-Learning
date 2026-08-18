import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();

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

  const course = courses.find((course) => course.id === id);

  return (
    <div>
      <h1>{course.courseName}</h1>
      <p>Course ID: {course.id}</p>
      <p>Price: ₹{course.price}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
};

export default CourseDetails;